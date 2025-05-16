import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HeroCard = () => {
  const [latestNews, setLatestNews] = useState(null);
  const fallbackImage = "https://via.placeholder.com/1200x600?text=No+Image";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const res = await axios.get('http://localhost:3000/news');
        if (res.data && res.data.length > 0) {
          const sorted = res.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setLatestNews(sorted[0]);
        }
      } catch (error) {
        console.error('Error fetching latest news:', error);
      }
    };

    fetchLatestNews();
  }, []);

  if (!latestNews) {
    return <div className="text-center py-10 text-gray-600">Loading latest news...</div>;
  }

  const { id, title, image } = latestNews;
  const imageUrl = image
    ? `http://localhost:3000/uploads/${image}`
    : fallbackImage;

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-15">
        <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <img
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
            src={imageUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
          />
          <div className="relative z-10 h-full flex flex-col justify-end pl-10 pb-16 max-w-xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <button
              onClick={() => navigate(`/news/${id}`)}
              className="bg-red-800 hover:bg-red-900 text-white font-semibold py-2 px-6 rounded w-fit"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
