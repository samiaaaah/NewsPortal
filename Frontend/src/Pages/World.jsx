import Singlecard from "../components/SingleCard";
import React, { useEffect, useState } from 'react'

const World = () => {
  const [worldNews, setWorldNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      // Simulating fetch for each section
      const worldData = Array.from({ length: 10 }).map((_, i) => ({
        title: `World Title ${i + 1}`,
        description: `Sample World news description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 3}x50${i + 3}`,
        buttonText: "Read More"
      }))
      setWorldNews(worldData)
    }

    fetchNews()
  }, [])

  return (
    <>
      <h1 className="font-bold pt-10 px-10 text-5xl">World News</h1>
      <div className="flex flex-col px-5">
        {worldNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  )
}
export default World
