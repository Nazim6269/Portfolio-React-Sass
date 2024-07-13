import { useEffect, useState } from "react";

import "./projects.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import PortfolioList from "../projectList/ProjectsList";

export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "NextJS",
    },
    {
      id: "web",
      title: "ReactJS",
    },
    {
      id: "mobile",
      title: "DOM",
    },
    {
      id: "design",
      title: "HTML-CSS",
    },
    {
      id: "content",
      title: "Random",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
