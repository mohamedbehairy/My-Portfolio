import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

// ─── EmailJS credentials ────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_wku7t2r";
const EMAILJS_TEMPLATE_ID = "template_a9i50v4";
const EMAILJS_PUBLIC_KEY = "mM2Ryd_1oi4weyDp1";

// ─── Zod schema ─────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(60, "Name is too long."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  subject: z.string().max(100, "Subject is too long.").optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long (max 2000 characters)."),
});

// ─── Contact info cards ──────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    id: 1,
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "medobehairy2@gmail.com",
    href: "mailto:medobehairy2@gmail.com",
  },
  {
    id: 2,
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+20 102 761 2644",
    href: "tel:+201027612644",
  },
  {
    id: 3,
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
  },
  {
    id: 4,
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/mohmedbehairy",
    href: "https://www.linkedin.com/in/mohmedbehairy",
  },
];

// ─── Reusable error message component ───────────────────────────────────────
function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-[12px] text-red-400 mt-1 animate-pop">
      <i className="fa-solid fa-circle-exclamation text-[11px]"></i>
      {message}
    </p>
  );
}

// ─── Input class helper ──────────────────────────────────────────────────────
function inputCls(hasError) {
  return [
    "bg-bg border rounded-[10px] px-4 py-3 text-light text-[15px]",
    "placeholder:text-paragraph outline-none w-full",
    "transition-all duration-[300ms]",
    hasError
      ? "border-red-500 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
      : "border-border-color focus:border-primary focus:shadow-[0_0_0_3px_rgba(124,106,255,0.15)]",
  ].join(" ");
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null); // null | "sending" | "sent" | "error"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched", // validate after the user leaves a field
  });

  async function onSubmit(data) {
    setSubmitStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject || "(no subject)",
          message: data.message,
          to_email: "medobehairy2@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("sent");
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  }

  return (
    <section className="py-[100px] px-0" id="contact">
      {/* Section heading */}
      <div className="section-heading">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2>
          Contact <span>Me</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="container flex gap-[50px] max-[991px]:flex-col">
        {/* ── Left column: info cards ── */}
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-paragraph text-[17px] leading-[1.8] mb-2">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Fill out the form or reach me directly through any of
            the channels below.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {CONTACT_INFO.map(({ id, icon, label, value, href }) => (
              <div
                key={id}
                className="flex items-center gap-4 p-4 bg-card-bg border border-border-color rounded-[12px] transition-all duration-[300ms] hover:border-primary hover:shadow-[0_0_20px_rgba(124,106,255,0.12)] group"
              >
                <div className="w-11 h-11 rounded-[10px] bg-primary-blur flex items-center justify-center flex-shrink-0 transition-all duration-[300ms] group-hover:bg-primary">
                  <i
                    className={`${icon} text-primary text-[18px] group-hover:text-light transition-all duration-[300ms]`}
                  ></i>
                </div>
                <div className="min-w-0">
                  <p className="text-paragraph text-[13px] mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-light text-[15px] font-medium hover:text-primary transition-colors duration-[300ms] truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-light text-[15px] font-medium">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: contact form ── */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-card-bg border border-border-color rounded-[16px] p-8 flex flex-col gap-5 max-[480px]:p-5"
          >
            {/* Name + Email row */}
            <div className="flex gap-4 max-[600px]:flex-col">
              {/* Full Name */}
              <div className="flex-1 flex flex-col gap-1">
                <label
                  htmlFor="contact-name"
                  className="text-paragraph text-[13px] font-medium"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  className={inputCls(!!errors.name)}
                  {...register("name")}
                />
                <FieldError message={errors.name?.message} />
              </div>

              {/* Email */}
              <div className="flex-1 flex flex-col gap-1">
                <label
                  htmlFor="contact-email"
                  className="text-paragraph text-[13px] font-medium"
                >
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputCls(!!errors.email)}
                  {...register("email")}
                />
                <FieldError message={errors.email?.message} />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-subject"
                className="text-paragraph text-[13px] font-medium"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Project enquiry, collaboration…"
                className={inputCls(!!errors.subject)}
                {...register("subject")}
              />
              <FieldError message={errors.subject?.message} />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-message"
                className="text-paragraph text-[13px] font-medium"
              >
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project or idea…"
                className={`${inputCls(!!errors.message)} resize-none`}
                {...register("message")}
              />
              <FieldError message={errors.message?.message} />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn primary-btn flex items-center justify-center gap-2 mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting || submitStatus === "sending" ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin text-[14px]"></i>
                  Sending…
                </>
              ) : submitStatus === "sent" ? (
                <>
                  <i className="fa-solid fa-circle-check text-[14px]"></i>
                  Message Sent!
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane text-[14px]"></i>
                  Send Message
                </>
              )}
            </button>

            {/* Success / error feedback */}
            {submitStatus === "sent" && (
              <p className="text-center text-[14px] text-secondary animate-pop">
                Thank you! I'll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-[14px] text-red-400 animate-pop">
                <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
