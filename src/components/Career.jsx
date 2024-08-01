// components/Career.jsx

import React from 'react'
import CardBase from '../components/CardBase';
function Career() {
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
      img: "https://th.bing.com/th/id/OIP.umYnpmYCA0mfrgoetiaoqwHaEK?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "linked in profile creation",
      description:
        "linked in profile creations",
     
    },
    {
      id: 4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting careers",
      
    },
    {
      id: 5,
      img: "https://th.bing.com/th/id/OIP.KUFwFL82z7D1xzBZpgQUEAHaEh?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "resume writing!",
      description:
        " The resume creation plays  for exciting careers",
      
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

export default Career;
