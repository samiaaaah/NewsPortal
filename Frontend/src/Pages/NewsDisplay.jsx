import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDisplay = () => {
  const { id } = useParams();
  
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fallbackImage = "https://via.placeholder.com/800x400?text=No+Image";
  

  useEffect(() => {
    const fetchNewsById = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/news/${id}`);
        setNews(res.data);
      } catch (err) {
        setError('Failed to fetch news article.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsById();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading news...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;
  if (!news) return <div className="text-center py-10">News not found.</div>;

  const { title, description, image } = news;
  const imageUrl = image ? `http://localhost:3000/uploads/${image}` : fallbackImage;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto rounded mb-6"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
      />
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default NewsDisplay;
