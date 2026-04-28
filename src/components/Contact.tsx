import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-inner">
        <div className="contact-left">
          <div className="section-label reveal">Contact</div>
          <h2 className="contact-title reveal delay-1">
            Let's talk
            <br />
            about your
            <br />
            <em>next project</em>
          </h2>
          <div className="contact-details reveal delay-2">
            <div className="contact-detail">
              <span className="detail-label">Address</span>
              <span className="detail-value">
                385 Herbert Macaulay Way, St Agnes (Montgomery Junction), Yaba, Lagos
                101245, Nigeria
              </span>
            </div>
            <div className="contact-detail">
              <span className="detail-label">Email</span>
              <span className="detail-value">info@cemexportals.com</span>
            </div>
            <div className="contact-detail">
              <span className="detail-label">Phone</span>
              <span className="detail-value">+234 818 175 1602</span>
            </div>
            <div className="contact-detail">
              <span className="detail-label">Hours</span>
              <span className="detail-value">Monday–Friday: 9am – 5pm</span>
            </div>
          </div>

          <div className="contact-socials reveal delay-3">
            {["Facebook", "Instagram", "YouTube", "LinkedIn"].map((s) => (
              <a href="#" key={s} className="social-link">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-right reveal delay-2">
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Service Interest</label>
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service...</option>
                <option value="architecture">Architectural Design</option>
                <option value="engineering">Structural Design</option>
                <option value="construction">Construction</option>
                <option value="interior">Interior Design &amp; Decoration</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
              />
            </div>
            <button className="btn-gold submit-btn" onClick={handleSubmit}>
              {sent ? (
                <span>Message Sent ✓</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
