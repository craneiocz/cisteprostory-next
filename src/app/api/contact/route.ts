import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message }: ContactFormRequest = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Jméno, e-mail a zpráva jsou povinné údaje' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY není nastaven');
      return NextResponse.json(
        { error: 'Odesílání e-mailů není nakonfigurováno.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      // Musí být e-mail z domény ověřené v Resend (viz nastavení domény).
      from: 'Kontaktní formulář <info@cisteprostory.eu>',
      to: ['info@cisteprostory.eu'],
      replyTo: email,
      subject: `Nová zpráva z webu od: ${name}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
        <hr />
        <h3>Zpráva:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json(
      { error: 'Nastala neočekávaná chyba.' },
      { status: 500 }
    );
  }
}
