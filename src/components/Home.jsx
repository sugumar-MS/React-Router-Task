// components/TopBar.jsx

import React from "react";
import CardBase from '../components/CardBase';

function Home() {
  let items = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
   
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      title: "UI/UX Designer Job Description and Roles & Responsibilities",
      description:
        "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
     
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
     
    },
    {
      id: 4,
      img:"https://static.guvi.in/course-thumbnail/webps/ethical_en_bundle.webp",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    
    },
    {
      id: 5,
      img: "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
      title: "full stack devolepment ",
      description:
        "exciting career opportunities for full stack devolepment",
     
    },
  ];
  return (
<div className="d-flex justify-content-between flex-wrap p-3">
        {items.map((e, i) => {
        return <CardBase data={e} key={i} />;
      })}
    </div>
  );
}

export default Home;