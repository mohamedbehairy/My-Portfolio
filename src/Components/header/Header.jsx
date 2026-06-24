import { useEffect, useRef, useState } from "react";
// import Model from "../model/Model";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  // const [showModel, setShowModel] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [showList, setShowList] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef(null);
  const btnRef = useRef(null);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via scroll position (offsetTop-based)
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const HEADER_OFFSET = 100;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // ── Near-bottom shortcut ──────────────────────────────────────────────
      // When the viewport bottom is within 40% of a viewport height from the
      // document bottom, activate the last section regardless of footer height.
      if (scrollY + windowHeight >= docHeight - windowHeight * 0.4) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // ── General: last section whose top we've scrolled past ───────────────
      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop - HEADER_OFFSET } : null;
        })
        .filter(Boolean);

      let current = sections[0]?.id ?? sectionIds[0];
      for (const { id, top } of sections) {
        if (scrollY >= top) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set correct state on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleShowList() {
    setShowList((prev) => !prev);
  }

  function handleLinkClick(id) {
    setActiveSection(id);
    setShowList(false);
  }

  const linkClass =
    "block py-2.5 px-[3px] relative transition-all duration-[300ms] overflow-hidden " +
    "before:content-[''] before:absolute before:w-full before:h-[3px] before:bg-primary " +
    "before:bottom-0 before:transition-all before:duration-[300ms] " +
    "hover:text-light hover:before:left-0 max-[991px]:w-full";

  const activeClass = "text-light before:left-0";
  const inactiveClass = "text-paragraph before:-left-full";

  return (
    <>
      {/* {showModel && (
        <Model closeModel={() => setShowModel(false)} />
      )} */}
      <header
        className={`fixed w-full z-[1000] transition-all duration-[300ms] ${
          scroll
            ? "bg-header-bg border-b border-border-color py-5"
            : "py-[25px]"
        }`}
      >
        <div className="container text-light flex items-center justify-between">
          {/* Logo */}
          <div className="logo relative text-[30px] font-bold text-light after:content-[''] after:absolute after:bottom-[5px] after:right-[-13px] after:w-2 after:h-2 after:bg-primary after:rounded-full">
            Behairy
          </div>

          {/* Hamburger — visible only on small screens */}
          <button
            ref={btnRef}
            aria-label="Toggle menu"
            aria-expanded={showList}
            className="bg-transparent border-none text-light text-[30px] transition-all duration-[300ms] cursor-pointer hover:text-primary hidden max-[991px]:block z-10"
            onClick={handleShowList}
          >
            <i
              className={`fa-solid ${
                showList ? "fa-xmark" : "fa-bars"
              } transition-all duration-[300ms] ${showList ? "rotate-90" : ""}`}
            ></i>
          </button>

          {/* Desktop nav */}
          <nav className="max-[991px]:hidden">
            <ul className="flex items-center gap-[15px]">
              {NAV_LINKS.map(({ href, label }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={href} className="nav-item">
                    <a
                      href={href}
                      className={`${linkClass} ${isActive ? activeClass : inactiveClass}`}
                      onClick={() => handleLinkClick(id)}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Mobile dropdown */}
        <div
          ref={navRef}
          className={`min-[992px]:hidden overflow-hidden transition-all duration-[300ms] ease-in-out ${
            showList ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-start gap-1 px-5 py-4 mx-4 mt-3 mb-2 bg-card-bg rounded-[12px] border border-border-color shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={href} className="w-full">
                  <a
                    href={href}
                    className={`${linkClass} ${isActive ? activeClass : inactiveClass}`}
                    onClick={() => handleLinkClick(id)}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
