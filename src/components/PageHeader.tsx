import "./PageHeader.css";

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ label, title, subtitle }: Props) {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        {label ? <div className="section-label page-header-label">{label}</div> : null}
        <h1 className="page-header-title">{title}</h1>
        {subtitle ? <p className="page-header-subtitle">{subtitle}</p> : null}
      </div>
    </header>
  );
}
