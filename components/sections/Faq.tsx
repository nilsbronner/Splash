"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import Section from "@/components/ui/Section";
import { faqCategories } from "@/lib/data";

export default function Faq() {
  const [activeCat, setActiveCat] = useState(faqCategories[0].id);
  const [openItem, setOpenItem] = useState<string | null>(`${faqCategories[0].id}-0`);

  const current = faqCategories.find((c) => c.id === activeCat)!;

  return (
    <Section id="faq" theme="light" eyebrow="FAQ" title="Questions fréquentes">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCat(cat.id);
                setOpenItem(`${cat.id}-0`);
              }}
              aria-pressed={activeCat === cat.id}
              className={clsx(
                "focus-ring shrink-0 rounded-xl2 px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full",
                activeCat === cat.id
                  ? "bg-splash-gradient text-white"
                  : "bg-ink/5 text-ink/65 hover:bg-ink/10"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {current.items.map((item, i) => {
            const key = `${current.id}-${i}`;
            const isOpen = openItem === key;
            return (
              <div key={key} className="overflow-hidden rounded-xl2 border border-ink/8 bg-white">
                <button
                  onClick={() => setOpenItem(isOpen ? null : key)}
                  aria-expanded={isOpen}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={clsx(
                      "shrink-0 text-ink/40 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-ink/60">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
