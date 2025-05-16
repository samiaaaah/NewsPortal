import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Singlecard from '../components/SingleCard';

const Business = () => {
  const [businessNews, setBusinessNews] = useState([]);

    useEffect(() => {
      const fetchBusinessNews = async () => {
        try {
          const response = await axios.get("http://localhost:3000/news");
  
          // Filter or map depending on how categories are sent from backend
          const filteredNews = response.data.filter(news => news.categoryName === 'Business' || news.categoryId === 3); // example category filter
  
          const formattedNews = filteredNews.map(news => ({
            id : news.id,
            title: news.title,
            imageUrl: `http://localhost:3000/uploads/${news.image}`,
            buttonText: "Read More"
          }));
  
          setBusinessNews(formattedNews);
        } catch (error) {
          console.error("Error fetching Business news:", error);
        }
      };
  
      fetchBusinessNews();
    }, []);

  return (
    <>
      <h1 className="font-bold pt-10 px-10 text-5xl">Business News</h1>
      <div className="flex flex-col px-5">
        {businessNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Business;