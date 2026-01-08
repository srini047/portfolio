"use client";

import type React from "react";

import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {"$ contact_me()"}
          </h1>
          <p className="text-lg text-muted-foreground font-mono">
            Let's connect! Feel free to reach out for collaborations or just a
            friendly hello.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border border-border rounded-lg bg-card">
            <Mail className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-mono text-sm text-muted-foreground mb-2">
              Email
            </h3>
            <a
              href="mailto:srinikethcr7@gmail.com"
              className="text-accent hover:text-primary transition-colors"
            >
              srinikethcr7@gmail.com
            </a>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card">
            <Mail className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-mono text-sm text-muted-foreground mb-2">
              Location
            </h3>
            <p className="text-foreground">Salem, Tamilnadu, India</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 border border-border rounded-lg bg-card"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-mono text-muted-foreground mb-2"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-mono text-muted-foreground mb-2"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-mono text-muted-foreground mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full font-mono bg-primary hover:bg-primary/90"
          >
            {status === "loading" ? "Sending..." : "$ send_message()"}
          </Button>

          {status === "success" && (
            <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-green-500 font-mono text-sm">
                Message sent successfully!
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-500 font-mono text-sm">
                Failed to send message. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
