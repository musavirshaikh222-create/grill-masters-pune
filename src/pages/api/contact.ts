import type { NextApiRequest, NextApiResponse } from "next";

const N8N_WEBHOOK =
  "https://buckss.app.n8n.cloud/webhook-test/2235781f-4371-4f6e-8767-41c352ed171f";
const TIMEOUT_MS = 10000;

type ResponseBody = {
  ok: boolean;
  message?: string;
  details?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseBody>) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, subject, message } = req.body ?? {};

    if (!name || typeof name !== "string") {
      return res.status(400).json({ ok: false, message: "Invalid or missing name" });
    }
    if (!email || typeof email !== "string") {
      return res.status(400).json({ ok: false, message: "Invalid or missing email" });
    }
    if (!message || typeof message !== "string") {
      return res.status(400).json({ ok: false, message: "Invalid or missing message" });
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      subject: subject?.trim() || "",
      message: message.trim(),
      source: "Contact Page",
      sentAt: new Date().toISOString(),
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const forwardResp = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));

    const ct = forwardResp.headers.get("content-type") || "";
    let forwardBody: any = null;
    try {
      forwardBody = ct.includes("application/json") ? await forwardResp.json() : await forwardResp.text();
    } catch {
      forwardBody = "(unable to parse response body)";
    }

    if (!forwardResp.ok) {
      return res.status(502).json({
        ok: false,
        message: `Upstream returned ${forwardResp.status} ${forwardResp.statusText}`,
        details: forwardBody,
      });
    }

    return res.status(200).json({ ok: true, message: "Message forwarded to webhook", details: forwardBody });
  } catch (err: any) {
    if (err?.name === "AbortError") {
      return res.status(504).json({ ok: false, message: "Webhook request timed out" });
    }
    console.error("API forward error:", err);
    return res.status(500).json({ ok: false, message: "Server error forwarding to webhook", details: String(err.message || err) });
  }
}
