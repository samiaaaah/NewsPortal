
import Singlecard from "../components/SingleCard";
import React, { useEffect, useState } from 'react'

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      // Simulating fetch for each section
      const sportsData = Array.from({ length: 10 }).map((_, i) => ({
        title: `Sports Title ${i + 1}`,
        description: `Sample Sports news description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 5}x50${i + 5}`,
        buttonText: "Read More"
      }))
      setSportsNews(sportsData)
    }

    fetchNews()
  }, [])

  return (
    <>
      <h1 className="font-bold pt-10 px-10 text-5xl">Sports News</h1>
      <div className="flex flex-col px-5">
        {sportsNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  )
}
export default Sports
