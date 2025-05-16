import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Herocard from './components/Herocard';
import LatestBusiness from './components/LatestBusiness';
import LatestIndia from './components/LatestIndia';
import LatestSports from './components/LatestSports';
import LatestWorld from './components/LatestWorld';

const App = () => {
  const [businessNews, setBusinessNews] = useState([]);
  const [indiaNews, setIndiaNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);

  const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/news");
        const allNews = res.data;

        const formatNews = (categoryId) =>
          allNews
            .filter(item => item.categoryId === categoryId)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5)
            .map(item => ({
              id : item.id,
              title: item.title,
              description: item.description,
              imageUrl: item.image
                ? `http://localhost:3000/uploads/${item.image}`
                : fallbackImage,
              buttonText: "Read More"
            }));

        setWorldNews(formatNews(1));   // World
        setIndiaNews(formatNews(2));   // India
        setBusinessNews(formatNews(3)); // Business
        setSportsNews(formatNews(4));  // Sports
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Herocard />

      {/* Business News Section */}
      <h1 className="font-bold p-4 text-2xl">Business News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {businessNews.map((item, index) => (
          <LatestBusiness key={index} {...item} />
        ))}
      </div>

      {/* India News Section */}
      <h1 className="font-bold p-4 text-2xl">India News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {indiaNews.map((item, index) => (
          <LatestIndia key={index} {...item} />
        ))}
      </div>

      {/* Sports News Section */}
      <h1 className="font-bold p-4 text-2xl">Sports News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {sportsNews.map((item, index) => (
          <LatestSports key={index} {...item} />
        ))}
      </div>

      {/* World News Section */}
      <h1 className="font-bold p-4 text-2xl">World News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {worldNews.map((item, index) => (
          <LatestWorld key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default App;
