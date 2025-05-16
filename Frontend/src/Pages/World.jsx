import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Singlecard from '../components/SingleCard';

const World = () => {
  const [worldNews, setWorldNews] = useState([]);

  useEffect(() => {
    const fetchWorldNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news");

        const filteredNews = response.data.filter(news => news.category === 'World' || news.categoryId === 1);

        const formattedNews = filteredNews.map(news => ({
          id : news.id,
          title: news.title,
          imageUrl: `http://localhost:3000/uploads/${news.image}`,
          buttonText: "Read More"
        }));

        setWorldNews(formattedNews);
      } catch (error) {
        console.error("Error fetching World news:", error);
      }
    };

    fetchWorldNews();
  }, []);

  return (
    <>
      <h1 className="font-bold pt-10 px-10 text-5xl">World News</h1>
      <div className="flex flex-col px-5">
        {worldNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default World;
