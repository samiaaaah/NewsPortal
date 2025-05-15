import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Singlecard from '../components/SingleCard';

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    const fetchSportsNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news");

        const filteredNews = response.data.filter(news => news.category === 'Sports' || news.categoryId === 3);

        const formattedNews = filteredNews.map(news => ({
          title: news.title,
          description: news.description,
          imageUrl: `http://localhost:3000/uploads/${news.image}`,
          buttonText: "Read More"
        }));

        setSportsNews(formattedNews);
      } catch (error) {
        console.error("Error fetching Sports news:", error);
      }
    };

    fetchSportsNews();
  }, []);

  return (
    <>
      <h1 className="font-bold pt-10 px-10 text-5xl">Sports News</h1>
      <div className="flex flex-col px-5">
        {sportsNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Sports;
