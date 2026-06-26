import { useState } from "react";
import InfoItem from "./InfoItem";
import { infoItemData } from "./infoItemData";
import CVModal from "./CVModal";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="py-[100px] max-[991px]:py-[60px] max-[575px]:py-[40px] px-0"
        id="about"
      >
        <div className="section-heading">
          <p className="section-subtitle">WHO I AM</p>
          <h2>
            About <span>Me</span>
          </h2>
          <div className="heading-line"></div>
        </div>
        <div className="container flex gap-[50px] max-[991px]:flex-col">
          <div className="flex-1 about-content">
            <div className="mb-5 about-desc">
              <p className="text-paragraph leading-[1.7] text-[20px]">
                I'm{" "}
                <strong className="font-bold text-light">
                  Mohamed Behairy
                </strong>
                , a passionate{" "}
                <strong className="font-bold text-light">
                  Front-End Web Developer{" "}
                </strong>
                with a strong focus on building modern, responsive, and
                high-performance web applications. I specialize in{" "}
                <strong className="font-bold text-light">React</strong>,
                <strong className="font-bold text-light"> Next.js</strong>, and
                <strong className="font-bold text-light"> TypeScript</strong>,
                creating clean, scalable, and user-friendly interfaces. I enjoy
                transforming ideas into real products, continuously learning new
                technologies, and writing maintainable code that delivers
                exceptional user experiences.
              </p>
            </div>
            <div className="about-status py-5 px-0 mb-5 border-y-2 border-border-color flex items-center gap-2.5">
              <div className="status-item p-2.5 flex flex-col gap-1.25">
                <span className="text-primary text-[35px] font-bold">10+</span>
                <p className="text-paragraph font-medium text-[18px]">
                  Projects Done
                </p>
              </div>
              <div className="status-item p-2.5 flex flex-col gap-1.25">
                <span className="text-primary text-[35px] font-bold">1+</span>
                <p className="text-paragraph font-medium text-[18px]">
                  Years Experience
                </p>
              </div>
              <div className="status-item p-2.5 flex flex-col gap-1.25">
                <span className="text-primary text-[35px] font-bold">100%</span>
                <p className="text-paragraph font-medium text-[18px]">
                  Commitment
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 about-actions">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn primary-btn"
              >
                View CV
              </button>
              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
          <div className="about-info flex-1 flex flex-col gap-[15px]">
            {infoItemData.map((item) => {
              return (
                <InfoItem
                  key={item.id}
                  iconClass={item.iconClass}
                  title={item.title}
                  type={item.type}
                  text={item.text}
                  href={item.href}
                />
              );
            })}
          </div>
        </div>
      </section>
      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
