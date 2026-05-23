"use client";

import { FormEvent, useState } from "react";
import { Building2, Loader2, Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { contactInfo, officeLocations } from "@/lib/site";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      mobile: String(formData.get("mobile") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Failed to send your message.");
      }

      form.reset();
      setSuccessMessage("Your message has been sent successfully.");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send your message.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-24 bg-white border-t border-slate-100 scroll-mt-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-clash font-bold uppercase tracking-wider text-primary">
            Contact Us
          </h2>
          <div className="accent-line" />
          <p className="mt-4 text-base md:text-lg font-sans font-medium text-slate-600 max-w-3xl mx-auto">
            Use the contact details below or send a message through the form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10">
          <div className="bg-slate-50/60 border border-slate-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-clash font-bold uppercase tracking-wider text-primary">
              Get In Touch
            </h3>
            <div className="accent-line-left" />

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-clash font-bold uppercase tracking-wider text-primary">
                    Phone
                  </p>
                  <a
                    href={contactInfo.phoneHref}
                    className="text-base font-sans font-medium text-slate-600 hover:text-secondary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-clash font-bold uppercase tracking-wider text-primary">
                    Email
                  </p>
                  <a
                    href={contactInfo.emailHref}
                    className="text-base font-sans font-medium text-slate-600 hover:text-secondary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-clash font-bold uppercase tracking-wider text-primary">
                    Offices
                  </p>
                  <ul className="mt-1 space-y-2 text-base font-sans font-medium text-slate-600">
                    {officeLocations.map((office) => (
                      <li key={office}>{office}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/60 border border-slate-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-clash font-bold uppercase tracking-wider text-primary">
              Send Us A Message
            </h3>
            <div className="accent-line-left" />

            <form
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
              onSubmit={handleSubmit}
            >
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-clash font-bold uppercase tracking-wider text-primary">
                  <UserRound size={14} />
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-sans text-slate-700 outline-none transition-colors focus:border-secondary"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-clash font-bold uppercase tracking-wider text-primary">
                  <Mail size={14} />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-sans text-slate-700 outline-none transition-colors focus:border-secondary"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-clash font-bold uppercase tracking-wider text-primary">
                  <Phone size={14} />
                  Mobile
                </span>
                <input
                  type="tel"
                  name="mobile"
                  className="w-full rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-sans text-slate-700 outline-none transition-colors focus:border-secondary"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-clash font-bold uppercase tracking-wider text-primary">
                  <Building2 size={14} />
                  Company Name
                </span>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-sans text-slate-700 outline-none transition-colors focus:border-secondary"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-clash font-bold uppercase tracking-wider text-primary">
                  <Send size={14} />
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-sans text-slate-700 outline-none transition-colors focus:border-secondary"
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-secondary transition-all duration-300 text-white px-6 py-3 rounded-sm font-clash font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-[0_0_20px_rgba(212,45,46,0.25)]"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  {isSubmitting ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                </button>
              </div>

              {successMessage ? (
                <p className="sm:col-span-2 text-sm font-sans font-medium text-green-700">
                  {successMessage}
                </p>
              ) : null}

              {errorMessage ? (
                <p className="sm:col-span-2 text-sm font-sans font-medium text-red-600">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
