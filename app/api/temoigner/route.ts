import { NextResponse } from "next/server";
import { validateTemoignage, buildTeamEmail, buildConfirmationEmail } from "@/lib/temoignage";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: [{ field: "_", message: "Requête invalide." }] }, { status: 400 });
  }

  const validated = validateTemoignage(raw);
  if (!validated.ok) {
    return NextResponse.json({ ok: false, errors: validated.errors }, { status: 400 });
  }

  const data = validated.data;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) {
    console.error("CONTACT_EMAIL n'est pas configuré : impossible d'envoyer le message Témoigner.");
    return NextResponse.json(
      { ok: false, errors: [{ field: "_", message: "Le service est temporairement indisponible." }] },
      { status: 503 }
    );
  }

  try {
    const teamEmail = buildTeamEmail(data);
    await sendEmail({ to: contactEmail, ...teamEmail });

    if (data.email) {
      const confirmation = buildConfirmationEmail(data);
      await sendEmail({ to: data.email, ...confirmation });
    }
  } catch (err) {
    console.error("Erreur d'envoi du message Témoigner:", err);
    return NextResponse.json(
      { ok: false, errors: [{ field: "_", message: "L'envoi a échoué, merci de réessayer." }] },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
