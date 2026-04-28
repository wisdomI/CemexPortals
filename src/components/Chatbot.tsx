import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  chatSuggestions,
  companyQuickFacts,
  getBotReply,
  initialGreeting,
  suggestionToPrompt,
} from "../data/chatbot";
import "./Chatbot.css";

type Msg = { id: string; role: "user" | "bot"; text: string };

const shortcuts = [
  { label: "Services", to: "/our-services" },
  { label: "Projects", to: "/projects" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
] as const;

function BotBody({ text }: { text: string }) {
  return (
    <div className="chatbot-msg-body">
      {text.split("\n\n").map((block, i) => (
        <p key={i} className="chatbot-msg-para">
          {block.split("\n").map((line, j, arr) => (
            <span key={j}>
              {line}
              {j < arr.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default function Chatbot() {
  const titleId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>(() => [
    { id: "greet", role: "bot", text: initialGreeting() },
  ]);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [msgs, open, scrollToBottom]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const pushExchange = (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed) return;
    const uid = crypto.randomUUID();
    const bid = crypto.randomUUID();
    setMsgs((m) => [
      ...m,
      { id: uid, role: "user", text: trimmed },
      { id: bid, role: "bot", text: getBotReply(trimmed) },
    ]);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushExchange(input);
  };

  return (
    <div className="chatbot-root">
      {open ? (
        <div
          className="chatbot-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <header className="chatbot-header">
            <div>
              <h2 id={titleId} className="chatbot-title">
                Cemex assistant
              </h2>
              <p className="chatbot-sub">Answers about services, projects &amp; contact</p>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <span aria-hidden>×</span>
            </button>
          </header>

          <div className="chatbot-shortcuts" aria-label="Quick links">
            {shortcuts.map((s) => (
              <Link key={s.to} to={s.to} className="chatbot-shortcut" onClick={() => setOpen(false)}>
                {s.label}
              </Link>
            ))}
            <a
              href={companyQuickFacts.whatsappUrl}
              className="chatbot-shortcut chatbot-shortcut--ext"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="chatbot-messages" ref={listRef} role="log" aria-live="polite" aria-relevant="additions">
            {msgs.map((m) => (
              <div
                key={m.id}
                className={`chatbot-bubble chatbot-bubble--${m.role}`}
              >
                {m.role === "bot" ? <BotBody text={m.text} /> : <p className="chatbot-msg-para">{m.text}</p>}
              </div>
            ))}
          </div>

          <div className="chatbot-chips" role="group" aria-label="Suggested questions">
            {chatSuggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="chatbot-chip"
                onClick={() => pushExchange(suggestionToPrompt(s))}
              >
                {s}
              </button>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Ask something…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              maxLength={500}
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M2 9h11M9 3l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className="chatbot-fab"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
      >
        {open ? (
          <span className="chatbot-fab-icon" aria-hidden>
            ×
          </span>
        ) : (
          <svg className="chatbot-fab-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3C7.03 3 3 6.58 3 11.08c0 1.7.63 3.28 1.71 4.62L3 21l5.55-1.62A8.9 8.9 0 0012 19.15c4.97 0 9-3.58 9-8.07C21 6.58 16.97 3 12 3z"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinejoin="round"
            />
            <path d="M8.5 11.5h7M8.5 14.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
