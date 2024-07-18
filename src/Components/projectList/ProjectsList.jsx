import './projectList.scss';

export default function ProjectsList({ category, active, setSelectCategory }) {
  return (
    <h3
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelectCategory(category)}
    >
      {category}
    </h3>
  );
}
