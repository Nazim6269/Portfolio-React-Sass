import "./projectList.scss";

export default function ProjectsList({ id, title, active, setSelected }) {
  return (
    <h3
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </h3>
  );
}
