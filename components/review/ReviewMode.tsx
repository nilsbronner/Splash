"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Crosshair,
  X,
  Trash2,
  Download,
  Copy,
  ChevronDown,
  ChevronUp,
  MessageSquarePlus,
} from "lucide-react";
import { clsx } from "clsx";

const STORAGE_KEY = "splash-review-comments";

interface ReviewComment {
  id: string;
  path: string;
  zoneKey: string;
  zoneLabel: string;
  text: string;
  createdAt: string;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

function loadComments(): ReviewComment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ReviewComment[]) : [];
  } catch {
    return [];
  }
}

function saveComments(comments: ReviewComment[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  } catch {
    // localStorage unavailable — comments stay in-memory for this session only.
  }
}

const LANDMARK_SELECTOR = "section, header, footer";

function getZoneLabel(el: Element): string {
  const heading = el.querySelector("h1, h2, h3");
  const text = heading?.textContent?.trim();
  if (text) return text.length > 70 ? `${text.slice(0, 70)}…` : text;
  if (el.tagName === "HEADER") return "Navigation";
  if (el.tagName === "FOOTER") return "Footer";
  return "Zone sans titre";
}

function getZoneKey(el: Element): string {
  const all = Array.from(document.querySelectorAll(LANDMARK_SELECTOR));
  const index = all.indexOf(el);
  return `${el.tagName.toLowerCase()}-${index}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportAsText(comments: ReviewComment[]) {
  const byPath = new Map<string, ReviewComment[]>();
  comments.forEach((c) => {
    const list = byPath.get(c.path) ?? [];
    list.push(c);
    byPath.set(c.path, list);
  });
  let out = `SPLASH — Commentaires de révision (${comments.length})\n`;
  out += `Généré le ${new Date().toLocaleString("fr-FR")}\n\n`;
  for (const [path, list] of byPath) {
    out += `PAGE : ${path}\n${"-".repeat(40)}\n`;
    list.forEach((c) => {
      out += `[${c.zoneLabel}] (${formatDate(c.createdAt)})\n${c.text}\n\n`;
    });
    out += "\n";
  }
  return out;
}

export default function ReviewMode() {
  const [active, setActive] = useState(false);
  const [comments, setComments] = useState<ReviewComment[]>([]);
  const [hoverRect, setHoverRect] = useState<Rect | null>(null);
  const [hoverLabel, setHoverLabel] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState<{ key: string; label: string; path: string } | null>(null);
  const [draft, setDraft] = useState("");
  const [showAll, setShowAll] = useState(false);
  const hoveredElRef = useRef<Element | null>(null);

  useEffect(() => {
    setComments(loadComments());
  }, []);

  const updateHoverRect = useCallback(() => {
    const el = hoveredElRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setHoverRect({ top: r.top, left: r.left, width: r.width, height: r.height });
  }, []);

  useEffect(() => {
    if (!active) {
      setHoverRect(null);
      hoveredElRef.current = null;
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest("[data-review-ui]")) {
        setHoverRect(null);
        hoveredElRef.current = null;
        return;
      }
      const zone = target?.closest(LANDMARK_SELECTOR) ?? null;
      if (zone !== hoveredElRef.current) {
        hoveredElRef.current = zone;
        setHoverLabel(zone ? getZoneLabel(zone) : "");
      }
      if (zone) {
        const r = zone.getBoundingClientRect();
        setHoverRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      } else {
        setHoverRect(null);
      }
    };

    const onScrollOrResize = () => updateHoverRect();

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest("[data-review-ui]")) return;
      e.preventDefault();
      e.stopPropagation();
      const zone = target?.closest(LANDMARK_SELECTOR);
      if (!zone) return;
      setSelectedZone({
        key: getZoneKey(zone),
        label: getZoneLabel(zone),
        path: window.location.pathname,
      });
      setDraft("");
      setPanelOpen(true);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (panelOpen) setPanelOpen(false);
        else setActive(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("click", onClick, true);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, panelOpen, updateHoverRect]);

  function addComment() {
    if (!selectedZone || !draft.trim()) return;
    const next: ReviewComment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      path: selectedZone.path,
      zoneKey: selectedZone.key,
      zoneLabel: selectedZone.label,
      text: draft.trim(),
      createdAt: new Date().toISOString(),
    };
    const updated = [next, ...comments];
    setComments(updated);
    saveComments(updated);
    setDraft("");
  }

  function deleteComment(id: string) {
    const updated = comments.filter((c) => c.id !== id);
    setComments(updated);
    saveComments(updated);
  }

  function clearAll() {
    if (!window.confirm("Supprimer tous les commentaires de révision ? Cette action est irréversible.")) return;
    setComments([]);
    saveComments([]);
  }

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(exportAsText(comments));
      window.alert("Commentaires copiés dans le presse-papiers.");
    } catch {
      window.alert("Impossible de copier automatiquement — utilisez plutôt le téléchargement.");
    }
  }

  function downloadAll() {
    const blob = new Blob([JSON.stringify(comments, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "splash-commentaires-revision.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  const zoneComments = selectedZone
    ? comments.filter((c) => c.path === selectedZone.path && c.zoneKey === selectedZone.key)
    : [];

  return (
    <div data-review-ui>
      {/* Hover highlight overlay */}
      {active && hoverRect && (
        <>
          <div
            className="pointer-events-none fixed z-[9998] rounded-md border-2 border-orange-500 bg-orange-500/10 transition-[top,left,width,height] duration-75"
            style={{
              top: hoverRect.top,
              left: hoverRect.left,
              width: hoverRect.width,
              height: hoverRect.height,
            }}
          />
          <div
            className="pointer-events-none fixed z-[9999] max-w-[80vw] truncate rounded-md bg-ink px-2.5 py-1 font-sans text-xs font-semibold text-cream shadow-glass"
            style={{
              top: Math.max(4, hoverRect.top - 28),
              left: Math.max(4, hoverRect.left),
            }}
          >
            {hoverLabel} — cliquer pour commenter
          </div>
        </>
      )}

      {/* Active-mode banner */}
      {active && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[9997] flex justify-center pt-2">
          <div className="rounded-full bg-ink px-4 py-1.5 text-xs font-medium text-cream shadow-glass">
            Mode révision actif — survolez une zone, cliquez pour proposer une modif · Échap pour quitter
          </div>
        </div>
      )}

      {/* Floating toggle */}
      <button
        type="button"
        onClick={() => {
          setActive((v) => !v);
          setPanelOpen(false);
        }}
        className={clsx(
          "fixed bottom-6 right-6 z-[9996] flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-glass transition-colors focus-ring",
          active ? "bg-orange-500 text-white" : "bg-ink text-cream hover:bg-ink-soft"
        )}
      >
        <Crosshair size={18} />
        {active ? "Quitter le mode révision" : "Mode révision"}
        {comments.length > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/20 px-1.5 text-xs">
            {comments.length}
          </span>
        )}
      </button>

      {/* Side panel */}
      {panelOpen && selectedZone && (
        <div className="fixed inset-y-0 right-0 z-[9999] flex w-full max-w-sm flex-col border-l border-ink/10 bg-cream shadow-2xl">
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <MessageSquarePlus size={18} className="text-orange-600" />
              Proposer une modif
            </div>
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              className="focus-ring rounded-full p-1.5 text-ink/50 hover:bg-ink/5 hover:text-ink"
              aria-label="Fermer le panneau"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-orange-600">
              {selectedZone.path}
            </p>
            <p className="mb-4 font-display text-lg uppercase leading-tight text-ink">
              {selectedZone.label}
            </p>

            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={5}
              placeholder="Écrivez ici la modification que vous proposez pour cette zone..."
              className="w-full rounded-xl2 border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-orange-500"
            />
            <button
              type="button"
              onClick={addComment}
              disabled={!draft.trim()}
              className="mt-3 w-full rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Enregistrer ce commentaire
            </button>

            {zoneComments.length > 0 && (
              <div className="mt-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Commentaires sur cette zone ({zoneComments.length})
                </p>
                {zoneComments.map((c) => (
                  <div key={c.id} className="rounded-xl2 border border-ink/10 bg-white p-3">
                    <div className="mb-1.5 flex items-start justify-between gap-2">
                      <span className="text-[11px] text-ink/40">{formatDate(c.createdAt)}</span>
                      <button
                        type="button"
                        onClick={() => deleteComment(c.id)}
                        className="focus-ring shrink-0 text-ink/30 hover:text-orange-600"
                        aria-label="Supprimer ce commentaire"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-sm leading-relaxed text-ink/80">{c.text}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="focus-ring mt-8 flex w-full items-center justify-between rounded-xl2 border border-ink/10 bg-white px-3 py-3 text-sm font-semibold text-ink"
            >
              Tous les commentaires du site ({comments.length})
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showAll && (
              <div className="mt-3 space-y-3">
                {comments.length === 0 && (
                  <p className="text-sm text-ink/50">Aucun commentaire pour l&apos;instant.</p>
                )}
                {comments.map((c) => (
                  <div key={c.id} className="rounded-xl2 border border-ink/10 bg-white p-3">
                    <div className="mb-1.5 flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-ink">{c.zoneLabel}</p>
                        <p className="text-[11px] text-orange-600">{c.path}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteComment(c.id)}
                        className="focus-ring shrink-0 text-ink/30 hover:text-orange-600"
                        aria-label="Supprimer ce commentaire"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-sm leading-relaxed text-ink/80">{c.text}</p>
                    <p className="mt-1 text-[11px] text-ink/40">{formatDate(c.createdAt)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-ink/10 px-5 py-4">
            <button
              type="button"
              onClick={copyAll}
              disabled={comments.length === 0}
              className="focus-ring flex flex-1 items-center justify-center gap-1.5 rounded-full border border-ink/15 px-3 py-2 text-xs font-semibold text-ink hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Copy size={14} /> Copier
            </button>
            <button
              type="button"
              onClick={downloadAll}
              disabled={comments.length === 0}
              className="focus-ring flex flex-1 items-center justify-center gap-1.5 rounded-full border border-ink/15 px-3 py-2 text-xs font-semibold text-ink hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Download size={14} /> Exporter
            </button>
            <button
              type="button"
              onClick={clearAll}
              disabled={comments.length === 0}
              className="focus-ring rounded-full border border-ink/15 px-3 py-2 text-xs font-semibold text-orange-600 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Tout effacer"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
