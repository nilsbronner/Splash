const REASONS = ["histoire", "sujet", "signalement", "invite", "initiative", "confier"] as const;
const VISIBILITIES = ["anonyme", "privee", "publique"] as const;

export type Reason = (typeof REASONS)[number];
export type Visibility = (typeof VISIBILITIES)[number];

export const REASON_LABELS: Record<Reason, string> = {
  histoire: "Partager mon histoire",
  sujet: "Proposer un sujet",
  signalement: "Signaler un cas",
  invite: "Recommander un invité",
  initiative: "Envoyer une initiative",
  confier: "Besoin de vous confier",
};

export const VISIBILITY_LABELS: Record<Visibility, string> = {
  anonyme: "Anonyme",
  privee: "Privée",
  publique: "Publique",
};

export type TemoignagePayload = {
  reason: Reason;
  visibility: Visibility;
  name: string;
  email: string;
  message: string;
  consent: boolean;
  /** Honeypot field: must stay empty. Filled in => bot. */
  website: string;
};

export type ValidationError = { field: string; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates and normalizes a raw submission. Returns either the clean payload or a list of errors. */
export function validateTemoignage(
  raw: Record<string, unknown>
): { ok: true; data: TemoignagePayload } | { ok: false; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const reason = str(raw.reason);
  if (!REASONS.includes(reason as Reason)) {
    errors.push({ field: "reason", message: "Motif invalide." });
  }

  const visibility = str(raw.visibility);
  if (!VISIBILITIES.includes(visibility as Visibility)) {
    errors.push({ field: "visibility", message: "Mode de participation invalide." });
  }

  const name = str(raw.name).slice(0, 200);

  const email = str(raw.email);
  const emailRequired = visibility !== "anonyme";
  if (emailRequired && !email) {
    errors.push({ field: "email", message: "L'email est requis." });
  } else if (email && !EMAIL_RE.test(email)) {
    errors.push({ field: "email", message: "Format d'email invalide." });
  }

  const message = str(raw.message);
  if (message.length < 10) {
    errors.push({ field: "message", message: "Le message doit contenir au moins 10 caractères." });
  } else if (message.length > 5000) {
    errors.push({ field: "message", message: "Le message dépasse 5000 caractères." });
  }

  const consent = raw.consent === true || raw.consent === "true" || raw.consent === "on";
  if (!consent) {
    errors.push({ field: "consent", message: "Le consentement est requis." });
  }

  // Honeypot: humans never fill this hidden field.
  const website = str(raw.website);
  if (website) {
    errors.push({ field: "website", message: "Soumission rejetée." });
  }

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      reason: reason as Reason,
      visibility: visibility as Visibility,
      name,
      email,
      message,
      consent,
      website,
    },
  };
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Builds the internal notification email sent to the SPLASH team for a new submission. */
export function buildTeamEmail(data: TemoignagePayload) {
  const reasonLabel = REASON_LABELS[data.reason];
  const visibilityLabel = VISIBILITY_LABELS[data.visibility];
  const displayName = data.name || "(non renseigné)";
  const displayEmail = data.email || "(non renseigné)";

  const subject = `[Témoigner] ${reasonLabel} — ${data.name || "Anonyme"}`;

  const text = [
    `Motif : ${reasonLabel}`,
    `Participation : ${visibilityLabel}`,
    `Nom : ${displayName}`,
    `Email : ${displayEmail}`,
    "",
    "Message :",
    data.message,
  ].join("\n");

  const html = `
    <h2>Nouveau message via le formulaire Témoigner</h2>
    <p><strong>Motif :</strong> ${escapeHtml(reasonLabel)}</p>
    <p><strong>Participation :</strong> ${escapeHtml(visibilityLabel)}</p>
    <p><strong>Nom :</strong> ${escapeHtml(displayName)}</p>
    <p><strong>Email :</strong> ${escapeHtml(displayEmail)}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `.trim();

  return { subject, text, html, replyTo: data.email || undefined };
}

/** Builds the acknowledgement email sent back to the person who submitted the form, when an email was provided. */
export function buildConfirmationEmail(data: TemoignagePayload) {
  const subject = "SPLASH — nous avons bien reçu votre message";
  const text = [
    `Bonjour${data.name ? ` ${data.name}` : ""},`,
    "",
    "Merci pour votre confiance. Votre message a bien été transmis à l'équipe SPLASH.",
    "Nous revenons vers vous dès que possible.",
    "",
    "— L'équipe SPLASH",
  ].join("\n");

  const html = `
    <p>Bonjour${data.name ? ` ${escapeHtml(data.name)}` : ""},</p>
    <p>Merci pour votre confiance. Votre message a bien été transmis à l'équipe SPLASH.<br />
    Nous revenons vers vous dès que possible.</p>
    <p>— L'équipe SPLASH</p>
  `.trim();

  return { subject, text, html };
}
