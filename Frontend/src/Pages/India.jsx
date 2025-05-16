import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Singlecard from '../components/SingleCard';

const India = () => {
  const [indiaNews, setIndiaNews] = useState([]);

  useEffect(() => {
    const fetchIndiaNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news");

        // Filter or map depending on how categories are sent from backend
        const filteredNews = response.data.filter(news => news.categoryName === 'India' || news.categoryId === 2); // example category filter

        const formattedNews = filteredNews.map(news => ({
          id : news.id,
          title: news.title,
          imageUrl: `http://localhost:3000/uploads/${news.image}`,
          buttonText: "Read More"
        }));

        setIndiaNews(formattedNews);
      } catch (error) {
        console.error("Error fetching India news:", error);
      }
    };

    fetchIndiaNews();
  }, []);

  return (
    <>
      <h1 className="font-bold pt-10 px-10 text-5xl">India News</h1>
      <div className="flex flex-col px-5">
        {indiaNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default India;
