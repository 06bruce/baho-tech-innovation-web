import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);
app.use(express.json({ limit: "1mb" }));

const dbPath = path.join(__dirname, "data", "messages.sqlite");
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}

const db = new Database(dbPath);
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
`);

const transporter = createTransporter();

function createTransporter() {
  if (!process.env.SMTP_HOST) return null;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      : undefined,
  });
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  const createdAt = new Date().toISOString();
  const insert = db.prepare(
    "INSERT INTO messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?)"
  );
  const info = insert.run(name, email, subject, message, createdAt);

  if (!transporter) {
    return res.status(500).json({
      ok: false,
      error: "Email transport is not configured. Message stored in database.",
      messageId: info.lastInsertRowid,
    });
  }

  try {
    const fromAddress = process.env.SMTP_FROM || "no-reply@bahotech.com";
    const toAddress = process.env.SMTP_TO || process.env.SMTP_USER;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: `[Contact] ${subject}`,
      replyTo: email,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    });

    return res.json({ ok: true, messageId: info.lastInsertRowid });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: "Email delivery failed. Message stored in database.",
      messageId: info.lastInsertRowid,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
});
