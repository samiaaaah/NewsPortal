import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Singlecard from '../components/SingleCard';

const Business = () => {
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    const fetchBusinessNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news");

        const formattedNews = response.data.map(news => ({
          title: news.title,
          description: news.description,
          imageUrl: `http://localhost:3000/uploads/${news.image}`, // Adjust path if needed
          buttonText: "Read More"
        }));

        setBusinessNews(formattedNews);
      } catch (error) {
        console.error("Error fetching business news:", error);
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
