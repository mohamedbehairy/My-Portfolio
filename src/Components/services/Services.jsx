import { services } from "./servicesData";

export default function Services() {
  return (
    <section className="py-[100px] px-0 relative overflow-hidden bg-card-bg" id="services">
      <div className="absolute h-[500px] w-[500px] bg-primary blur-[180px] opacity-[0.08] top-[20%] -left-[200px] pointer-events-none z-0"></div>
      <div className="container relative z-10">
        <div className="section-heading">
          <p className="section-subtitle">WHAT I PROVIDE</p>
          <h2>
            Premium <span>Services</span>
          </h2>
          <div className="heading-line"></div>
        </div>
        <div className="services-grid grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[30px] relative z-10 max-[767px]:grid-cols-1">
          {services.map((service, index) => {
            return (
              <article
                className="service-card relative overflow-hidden p-[30px] rounded-[28px] bg-gradient-to-br from-[rgba(16,16,30,0.95)] to-[rgba(10,12,25,0.95)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[12px] transition-all duration-[400ms] ease-out hover:-translate-y-3 hover:border-[rgba(124,106,255,0.35)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_35px_rgba(124,106,255,0.18)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(124,106,255,0.12)] before:via-transparent before:to-[rgba(6,182,212,0.08)] before:opacity-0 before:transition-all before:duration-[400ms] before:ease-out hover:before:opacity-100 group max-[767px]:p-[25px]"
                key={index}
              >
                <div className="service-glow absolute w-[180px] h-[180px] bg-primary blur-[90px] opacity-0 -top-[50px] -right-[50px] transition-opacity duration-[500ms] ease-out group-hover:opacity-10 pointer-events-none"></div>
                <div className="service-top flex items-center justify-between mb-[35px]">
                  <div className="service-icon w-[60px] h-[60px] rounded-full flex items-center justify-center bg-gradient-to-br from-[rgba(124,106,255,0.15)] to-[rgba(6,182,212,0.12)] border border-[rgba(124,106,255,0.15)] text-light text-[28px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary before:to-secondary before:opacity-0 before:transition-all before:duration-[400ms] before:ease-out group-hover:before:opacity-100">
                    <i className={`${service.icon} relative z-10`}></i>
                  </div>
                  <span className="service-number text-[45px] font-extrabold text-[rgba(255,255,255,0.05)] leading-none">
                    0{index + 1}
                  </span>
                </div>
                <div className="service-content">
                  <h3 className="text-light text-[28px] mb-[18px] font-bold max-[767px]:text-[24px]">
                    {service.title}
                  </h3>
                  <p className="text-paragraph leading-[1.9] text-[15px]">
                    {service.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}