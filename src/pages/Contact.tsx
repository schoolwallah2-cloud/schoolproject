// src/pages/Contact.tsx
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

type FormState = {
  name: string;
  school: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    school: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // --- VALIDATORS ---
  function validateField(name: keyof FormState, value: string): string {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "school":
        return value.trim() ? "" : "School is required";
      case "email":
        if (!value.trim()) return "Email is required";
        return /\S+@\S+\.\S+/.test(value) ? "" : "Enter a valid email";
      case "phone":
        if (!value.trim()) return "Phone is required";
        const digitsOnly = value.replace(/\D/g, "");
        return digitsOnly.length === 10
          ? ""
          : "Phone must be exactly 10 digits";
      case "message":
        return value.trim() ? "" : "Message is required";
      default:
        return "";
    }
  }

  function validateAll() {
    const e: Record<string, string> = {};
    (Object.keys(form) as (keyof FormState)[]).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) e[field] = error;
    });
    return e;
  }

  // --- HANDLERS ---
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));

    // instant validation for this field
    const error = validateField(name as keyof FormState, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setStatusMsg(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatusMsg(null);

    const allErrors = validateAll();
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) {
      setStatusMsg("Please fix the fields below.");
      return;
    }

    setLoading(true);

    const payload = {
      name: form.name.trim(),
      school: form.school.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    };

    try {
      const { error } = await supabase
        .from("contact")
        .insert([payload], { returning: "minimal" });

      if (error) {
        console.error("Supabase insert error: ", error);
        setStatusMsg("❌ Failed to save — please try again.");
      } else {
        setStatusMsg("✅ Saved — thank you!");
        setForm({ name: "", school: "", email: "", phone: "", message: "" });
        setErrors({});
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setStatusMsg("❌ An unexpected error happened.");
    } finally {
      setLoading(false);
    }
  }

  function Label({
    field,
    children,
  }: {
    field: keyof FormState;
    children: React.ReactNode;
  }) {
    return (
      <label className="block mb-2">
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">{children}</span>
          <span className="text-red-600">*</span>
        </div>
        {errors[field] && (
          <div className="text-xs text-red-600 mt-1">{errors[field]}</div>
        )}
      </label>
    );
  }

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact us</h2>

      {statusMsg && (
        <div
          className={`mb-4 p-3 rounded ${
            statusMsg.startsWith("✅")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {statusMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-xl">
        <Label field="name">Name</Label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full border px-3 py-2 rounded ${
            errors.name ? "border-red-600" : ""
          }`}
          placeholder="Your name"
        />

        <Label field="school">School</Label>
        <input
          name="school"
          value={form.school}
          onChange={handleChange}
          className={`w-full border px-3 py-2 rounded ${
            errors.school ? "border-red-600" : ""
          }`}
          placeholder="Your school"
        />

        <Label field="email">Email</Label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full border px-3 py-2 rounded ${
            errors.email ? "border-red-600" : ""
          }`}
          placeholder="you@example.com"
        />

        <Label field="phone">Phone</Label>
        <input
          name="phone"
          type="tel"
          pattern="[0-9]{10}"
          value={form.phone}
          onChange={handleChange}
          className={`w-full border px-3 py-2 rounded ${
            errors.phone ? "border-red-600" : ""
          }`}
          placeholder="10-digit phone number"
        />

        <Label field="message">Message</Label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className={`w-full border px-3 py-2 rounded ${
            errors.message ? "border-red-600" : ""
          }`}
          placeholder="Your message"
          rows={6}
        />

        <div className="mt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
}
