import React from "react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/mohamedbehairy",
      icon: "fa-github",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/mohmedbehairy",
      icon: "fa-linkedin-in",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/mo7amd_be7airy/",
      icon: "fa-instagram",
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/mohamed.behairy.374204/",
      icon: "fa-facebook-f",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <footer className="bg-head-bg border-t border-border-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-8 md:py-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                MB
              </div>
              <h3 className="text-xl font-bold text-light">
                Mohamed <span className="text-primary">Behairy</span>
              </h3>
            </div>
            <p className="text-paragraph text-sm leading-relaxed max-w-xs">
              Frontend Developer building modern, responsive, and user-friendly
              web applications.
            </p>
          </div>

          <div>
            <h4 className="text-light font-semibold text-sm uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-paragraph hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-light font-semibold text-sm uppercase tracking-wider mb-3">
              Let's Connect
            </h4>
            <div className="space-y-3">
              <ul className="flex flex-col gap-3">
                <li className="flex items-center justify-start gap-3 text-paragraph transition-all duration-300 hover:text-light hover:translate-x-1.25 text-sm">
                  <i className="fa-regular fa-envelope text-primary"></i>
                  medobehairy2@gmail.com
                </li>
                <li className="flex items-center justify-start gap-3 text-paragraph transition-all duration-300 hover:text-light hover:translate-x-1.25 text-sm">
                  <i className="fa-solid fa-phone text-primary"></i>
                  +20 102 761 2644
                </li>
                <li className="flex items-center justify-start gap-3 text-paragraph transition-all duration-300 hover:text-light hover:translate-x-1.25 text-sm">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                  Cairo, Egypt
                </li>
              </ul>
              <div className="flex items-center gap-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full border border-border-color flex items-center justify-center text-paragraph hover:text-light hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    <i className={`fa-brands ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-color py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-paragraph text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-medium">Mohamed Behairy</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
