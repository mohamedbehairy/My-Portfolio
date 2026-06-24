export default function InfoItem({ title, iconClass, text, type, href }) {
  return (
    <div className="info-item p-[15px] bg-card-bg border border-border-color rounded-[10px] flex gap-2.5 items-center transition-all duration-[300ms] hover:translate-x-[5px] hover:border-primary hover:shadow-[0_10px_30px_rgba(124,106,255,0.15)]">
      <i className={`${iconClass} text-primary`}></i>
      <div>
        <h3 className="text-paragraph mb-1.25 font-bold">{title}</h3>
        {type === "link" ? (
          <a
            className="text-light hover:text-primary transition-colors"
            href={href}
          >
            {text}
          </a>
        ) : (
          <p className="text-light">{text}</p>
        )}
      </div>
    </div>
  );
}
