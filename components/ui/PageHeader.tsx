import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "./Container";

export default function PageHeader() {
  return (
    <div className="bg-cream pb-4 pt-28 md:pt-32">
      <Container>
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} /> Retour à l&apos;accueil
        </Link>
      </Container>
    </div>
  );
}
