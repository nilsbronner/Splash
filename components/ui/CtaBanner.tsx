import Section from "./Section";
import Button from "./Button";

interface CtaAction {
  label: string;
  href: string;
  external?: boolean;
}

export default function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: CtaAction;
  secondary?: CtaAction;
}) {
  return (
    <Section theme="dark" className="!py-16 md:!py-20">
      <div className="flex flex-col items-center gap-6 rounded-xl3 bg-splash-gradient p-10 text-center text-white md:p-14">
        <p className="font-display text-2xl uppercase leading-tight tracking-tight md:text-4xl">
          {title}
        </p>
        {description && <p className="max-w-xl text-white/85">{description}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={primary.href}
            target={primary.external ? "_blank" : undefined}
            rel={primary.external ? "noopener noreferrer" : undefined}
            variant="dark"
            size="lg"
            className="!bg-white !text-ink hover:!bg-white/90"
          >
            {primary.label}
          </Button>
          {secondary && (
            <Button
              href={secondary.href}
              target={secondary.external ? "_blank" : undefined}
              rel={secondary.external ? "noopener noreferrer" : undefined}
              variant="outlineLight"
              size="lg"
            >
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
