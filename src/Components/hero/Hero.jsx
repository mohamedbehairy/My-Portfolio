import heroImage from "../../assets/hero-image 4.jpg";

export default function Hero() {
  return (
    <>
      <section
        className="relative text-white bg-hero-gradient overflow-hidden"
        id="hero"
      >
        <div className="absolute w-[400px] h-[400px] bg-primary blur-[120px] opacity-20 top-[10%] left-[10%] z-0 pointer-events-none max-[991px]:w-[200px] max-[991px]:h-[200px]"></div>
        <div className="container min-h-screen max-[991px]:min-h-[80vh] max-[575px]:min-h-[70vh] relative flex items-center justify-center gap-[50px] z-10 max-[991px]:flex-col-reverse max-[991px]:py-[90px] max-[991px]:px-4 max-[991px]:gap-10">
          <div className="hero-content flex-1 max-[991px]:self-start max-[991px]:mt-2.5">
            <div className="hero-available relative mb-2.5 bg-[rgba(124,106,255,0.25)] py-2.5 px-5 pl-10 rounded-full text-primary border border-[rgba(124,106,255,0.25)] w-fit before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#4ade80] before:absolute before:top-1/2 before:left-5 before:animate-available">
              Available for work
            </div>
            <div className="hero-title my-[30px] mx-0">
              <p className="text-[20px] text-primary mb-2.5 font-mono max-[767px]:text-[16px]">
                Hello I'm
              </p>
              <h1 className="mb-2.5 text-[70px] text-light max-[991px]:text-[50px] max-[575px]:text-[36px] leading-tight font-bold">
                Mohamed <span className="text-primary">Behairy</span>
              </h1>
              <p className="text-light text-[28px] max-[767px]:text-[22px]">
                Front-End Developer
              </p>
            </div>
            <div className="leading-[1.4] text-paragraph max-w-[600px] text-[20px] mb-5 max-[991px]:text-[18px] max-[767px]:text-[16px]">
              Passionate Front-End Web Developer specializing in React, Next.js,
              and TypeScript. I build responsive, high-performance web
              applications with modern UI technologies, focusing on clean code,
              scalability, and exceptional user experiences.
            </div>
            <div className="hero-actions flex items-center gap-5 mb-5 max-[575px]:flex-col max-[575px]:items-stretch max-[575px]:gap-4">
              <a
                href="#projects"
                className="btn primary-btn text-center max-[575px]:w-full"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn secondary-btn text-center max-[575px]:w-full"
              >
                Get In Touch
              </a>
            </div>
            <div className="social-icons flex flex-wrap items-center gap-2.5 max-[991px]:justify-start max-[575px]:justify-center">
              <a
                target="_blank"
                href="https://www.instagram.com/mo7amd_be7airy/?hl=en"
                className="w-10 h-10 border border-paragraph rounded-full flex items-center justify-center text-paragraph transition-all duration-[300ms] hover:bg-primary hover:-translate-y-[3px] hover:text-light group"
              >
                <i className="fa-brands fa-instagram transition-transform duration-[300ms] group-hover:scale-110"></i>
              </a>
              <a
                href="https://www.facebook.com/mohamed.behairy.374204/"
                target="_blank"
                className="w-10 h-10 border border-paragraph rounded-full flex items-center justify-center text-paragraph transition-all duration-[300ms] hover:bg-primary hover:-translate-y-[3px] hover:text-light group"
              >
                <i className="fa-brands fa-facebook transition-transform duration-[300ms] group-hover:scale-110"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohmedbehairy/"
                target="_blank"
                className="w-10 h-10 border border-paragraph rounded-full flex items-center justify-center text-paragraph transition-all duration-[300ms] hover:bg-primary hover:-translate-y-[3px] hover:text-light group"
              >
                <i className="fa-brands fa-linkedin transition-transform duration-[300ms] group-hover:scale-110"></i>
              </a>
              <a
                href="https://github.com/mohamedbehairy"
                target="_blank"
                className="w-10 h-10 border border-paragraph rounded-full flex items-center justify-center text-paragraph transition-all duration-[300ms] hover:bg-primary hover:-translate-y-[3px] hover:text-light group"
              >
                <i className="fa-brands fa-github transition-transform duration-[300ms] group-hover:scale-110"></i>
              </a>
              <a
                href="https://wa.me/201027612644"
                target="_blank"
                className="w-10 h-10 border border-paragraph rounded-full flex items-center justify-center text-paragraph transition-all duration-[300ms] hover:bg-primary hover:-translate-y-[3px] hover:text-light group"
              >
                <i className="fa-brands fa-whatsapp transition-transform duration-[300ms] group-hover:scale-110"></i>
              </a>
              <a
                href="mailto:medobehairy2@gmail.com"
                className="w-10 h-10 border border-paragraph rounded-full flex items-center justify-center text-paragraph transition-all duration-[300ms] hover:bg-primary hover:-translate-y-[3px] hover:text-light group"
              >
                <i className="fa-solid fa-envelope transition-transform duration-[300ms] group-hover:scale-110"></i>
              </a>
            </div>
          </div>
          <div className="hero-image w-[310px] h-[310px] max-[991px]:w-[280px] max-[991px]:h-[280px] max-[575px]:w-[220px] max-[575px]:h-[220px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary shadow-[0_0_40px_rgba(124,106,255,0.2)] rounded-full max-[991px]:mb-2.5">
            <img
              className="w-[300px] h-[300px] max-[991px]:w-[270px] max-[991px]:h-[270px] max-[575px]:w-[210px] max-[575px]:h-[210px] rounded-full"
              src={heroImage}
              alt="Mohamed Behairy portrait"
            />
          </div>
        </div>
        <a
          href="#about"
          className="scroll-down absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-12 bg-transparent text-primary border-2 border-primary rounded-full hover:text-secondary hover:border-secondary transition-all duration-300 z-20"
        >
          <i className="fa-solid fa-angles-down text-[14px] animate-to-down"></i>
        </a>
      </section>
    </>
  );
}
