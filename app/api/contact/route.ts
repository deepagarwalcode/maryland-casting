import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  const payload: ContactPayload = {
    name: normalize(body.name),
    email: normalize(body.email),
    mobile: normalize(body.mobile),
    company: normalize(body.company),
    message: normalize(body.message),
  };

  if (
    !payload.name ||
    !payload.email ||
    !payload.mobile ||
    !payload.company ||
    !payload.message
  ) {
    return Response.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? "castingmaryland@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? user;

  if (!host || !user || !pass || !from) {
    return Response.json(
      { error: "Email service is not configured on the server." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: "Website Form Fill",
    text: [
      "Website Form Fill",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Mobile: ${payload.mobile}`,
      `Company Name: ${payload.company}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #1e293b;">
        <h2 style="margin-bottom: 16px;">Website Form Fill</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(payload.mobile)}</p>
        <p><strong>Company Name:</strong> ${escapeHtml(payload.company)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  return Response.json({ ok: true });
}
