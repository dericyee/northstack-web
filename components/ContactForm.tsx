"use client";

import { useState } from "react";

const INTERESTS = [
  "AI readiness audit",
  "Workflow automation",
  "Custom AI tooling",
  "Team enablement",
  "Not sure yet",
];

const SIZES = ["1–10", "11–50", "51–200", "201–1000", "1000+"];

export default function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  function toggle(value: string) {
    setInterests((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      role: String(fd.get("role") || ""),
      companySize: String(fd.get("companySize") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
      interestedIn: interests,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form">
        <div className="form-success">
          <div className="tick">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Thanks — we'll be in touch.</h3>
          <p>
            Your note landed with us. Expect a reply from a real person within
            one business day, not an autoresponder sequence.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {status === "error" && <div className="form-error">{error}</div>}

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Jane Tan" required />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            required
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" placeholder="Acme Brokerage" />
        </div>
        <div className="field">
          <label htmlFor="role">Your role</label>
          <input id="role" name="role" placeholder="Founder / COO" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="companySize">Company size</label>
        <select id="companySize" name="companySize" defaultValue="">
          <option value="" disabled>
            Select team size…
          </option>
          {SIZES.map((s) => (
            <option key={s} value={s}>
              {s} people
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>What are you most interested in?</label>
        <div className="chips">
          {INTERESTS.map((item) => (
            <span
              key={item}
              className={`chip ${interests.includes(item) ? "active" : ""}`}
              role="checkbox"
              aria-checked={interests.includes(item)}
              tabIndex={0}
              onClick={() => toggle(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(item);
                }
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">What's slowing you down right now?</label>
        <textarea
          id="message"
          name="message"
          placeholder="A few lines on where the manual work piles up, or what you'd love AI to take off your plate."
        />
      </div>

      {/* honeypot — hidden from humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        aria-hidden="true"
      />

      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Start the conversation"}
      </button>
      <p className="form-note">
        No sales sequence. No spam. Your details stay between us.
      </p>
    </form>
  );
}
