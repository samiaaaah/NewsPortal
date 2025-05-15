import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatsCard from './StatsCard';

const NewsStats = ({ category, title }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/news/count`);
        // console.log("NEWS COUNT RESPONSE:", response.data); 
        
        if (response.data.success) {
          const countValue = category === 'total'
           ? response.data.total
           : response.data[category.toLowerCase()];

            
          setCount(countValue || 0);
        } else {
          setError(response.data.message || 'Failed to load count');
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Network error');
      }finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [category]);

  return (
    <StatsCard 
      title={`TOTAL ${title.toUpperCase()} NEWS`} 
      count={count} 
      loading={loading}
      error={error}
    />
  );
};

export default NewsStats;