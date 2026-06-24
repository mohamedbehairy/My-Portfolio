import { skillsData } from "./skillsData";

export default function Skills() {
  const skillsList = skillsData.map((item, index) => {
    return (
      <article
        className="p-[25px] rounded-[18px] bg-card-bg border border-border-color transition-all duration-[300ms] relative overflow-hidden hover:-translate-y-1.25 hover:shadow-[0_10px_30px_rgba(124,106,255,0.15)] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[3px] before:bg-gradient-to-r before:from-primary before:to-secondary before:transition-all before:duration-[300ms] hover:before:w-full"
        key={index}
      >
        <div className="item-head flex items-center gap-[15px] mb-[30px]">
          <span className="w-[50px] h-[50px] flex items-center justify-center bg-gradient-to-br from-primary-blur to-[rgba(6,182,212,0.1)] rounded-[12px] text-secondary text-[22px]">
            {item.icon}
          </span>
          <h3 className="text-light text-[22px] font-semibold max-[767px]:text-[18px]">
            {item.title}
          </h3>
        </div>
        <div className="item-body grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-[18px]">
          {item.skills.map((skill, idx) => {
            return (
              <div
                className="skill-card flex flex-col items-center gap-2.5 transition-all duration-[300ms] hover:-translate-y-[3px]"
                key={idx}
              >
                <div className="skill-top flex flex-col items-center gap-2">
                  <span className="w-10 h-10 flex items-center justify-center bg-border-color rounded-[10px] text-[20px] text-secondary">
                    {skill.icon}
                  </span>
                  <h4 className="text-[14px] font-medium text-light text-center">
                    {skill.title}
                  </h4>
                </div>
                <div className="prog w-full h-1.5 bg-primary-blur rounded-[30px] overflow-hidden">
                  <span
                    className="block h-full bg-gradient-to-r from-primary to-secondary rounded-[30px]"
                    style={{
                      width: skill.prog,
                    }}
                  ></span>
                </div>
                <span className="percent text-[13px] text-paragraph mt-1 block">
                  {skill.prog}
                </span>
              </div>
            );
          })}
        </div>
      </article>
    );
  });

  return (
    <section className="py-[100px] px-0 bg-card-bg" id="skills">
      <div className="section-heading">
        <p className="section-subtitle">MY SKILLS</p>
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="heading-line"></div>
      </div>
      <div className="container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[25px] max-[767px]:grid-cols-1">
        {skillsList}
      </div>
    </section>
  );
}
