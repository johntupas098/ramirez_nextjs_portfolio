"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 800);
  };

  return (
    <section id="contact" className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-pink-400">Get In Touch</h2>
        <p className="mt-3 text-center text-sm text-slate-600">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr,1.8fr]">
          {/* info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-pink-400">Contact Information</h3>
            <p className="text-sm text-slate-600">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Email</p>
                  <p className="text-pink-300">johnwayne.ramirez-23@cpu.edu.ph</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                  📞
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Phone</p>
                  <p className="text-pink-300">+63 961 013 9726</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                  📍
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Location</p>
                  <p className="text-pink-300">Jaro, Iloilo City, Iloilo</p>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-600">
                  Name
                </label>
                <input
                  name="name"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}
            {status === "success" && (
              <p className="text-xs text-emerald-600">
                Message sent (simulated). You can connect this to a real backend
                later.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-2 text-sm font-medium text-white shadow hover:opacity-90 disabled:opacity-60"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
