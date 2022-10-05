import {
   featuredPortfolio,
   webPortfolio,
   mobilePortfolio,
   designPortfolio,
   contentPortfolio,
} from "../data";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";

const Portfolio = () => {
   const [selected, setSelected] = useState("featured");
   const [data, setData] = useState([]);

   const list = [
      {
         id: "featured",
         title: "Featured",
      },
      {
         id: "web",
         title: "Web App",
      },
      {
         id: "mobile",
         title: "Mobile App",
      },
      {
         id: "design",
         title: "Design",
      },
      {
         id: "branding",
         title: "Branding",
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
         <h1>Portfolio</h1>
         <ul>
            {list.map((item) => (
               <PortfolioList
                  id={item.id}
                  title={item.title}
                  active={item.id === selected}
                  setSelected={setSelected}
               />
            ))}
         </ul>
         <div className="container">
            {data.map((item) => (
               <div className="item">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Portfolio;
