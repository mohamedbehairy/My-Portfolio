import { useEffect, useState, useRef } from "react";

export default function CVModal({ isOpen, onClose }) {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  // Sync open state with mount/unmount and transitions
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Wait for a frame to trigger the enter transition
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // Wait for the exit transition (300ms) to complete before unmounting
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle focus trapping, Escape key, and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;

    // Disable background page scrolling
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return;

        // Find all keyboard focusable elements inside the modal
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, iframe, [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: Wrap from first to last element
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Tab: Wrap from last to first element
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Auto-focus the first element in the modal (e.g., Download button) when opened
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, iframe, [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    }, 100);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Restore background page scrolling
      document.body.style.overflow = "";
      clearTimeout(timer);
      if (previousFocus) {
        previousFocus.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`relative w-[95vw] md:w-[90vw] lg:w-[80vw] h-[92vh] md:h-[88vh] lg:h-[90vh] bg-card-bg/95 border border-border-color backdrop-blur-xl rounded-[20px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),_0_0_40px_rgba(124,106,255,0.15),_0_0_40px_rgba(6,182,212,0.15)] flex flex-col overflow-hidden transition-all duration-300 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Close Button - Small & Top Right */}
        <button
          onClick={onClose}
          className="absolute z-50 flex items-center justify-center w-8 h-8 transition-all border rounded-lg top-8 right-6 border-border-color text-paragraph hover:bg-red-500 hover:text-white hover:border-red-500"
          aria-label="Close"
        >
          <i className="text-sm fa-solid fa-xmark"></i>
        </button>

        {/* Header */}
        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 px-6 py-5 border-b border-border-color bg-gradient-to-r from-[#181827] via-[#141420] to-[#181827]">
          {/* Left */}
          <div className="flex items-center min-w-0 gap-4 pr-12 lg:pr-0">
            <div className="flex items-center justify-center flex-shrink-0 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-red-500/30">
              <i className="text-2xl text-white fa-solid fa-file-pdf"></i>
            </div>

            <div className="min-w-0">
              <h3
                id="cv-modal-title"
                className="text-xl font-semibold truncate text-light"
              >
                Mohamed Behairy CV
              </h3>

              <p className="mt-1 text-sm text-paragraph">
                Front-End Developer • PDF Document
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-3 lg:pr-12">
            <a
              href="/mohamed behairy.pdf"
              download
              className="h-11 px-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.03] transition-all"
            >
              <i className="fa-solid fa-download"></i>
              <span>Download</span>
            </a>

            <a
              href="/mohamed behairy.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 transition-all border h-11 rounded-xl border-border-color text-light hover:border-primary hover:bg-primary/10"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
              <span>Open</span>
            </a>
          </div>
        </header>

        {/* PDF Viewer Area */}
        <div className="relative flex-1 w-full bg-bg">
          <iframe
            src="/mohamed behairy.pdf#toolbar=0"
            title="Mohamed Behairy CV PDF Viewer"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}
