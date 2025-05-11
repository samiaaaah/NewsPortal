import Singlecard from "../components/SingleCard";
import React, { useEffect, useState } from 'react'

const India = () => {
  const [indiaNews, setIndiaNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      // Simulating fetch for each section
      const indiaData = Array.from({ length: 10 }).map((_, i) => ({
        title: `India Title ${i + 1}`,
        description: `Sample India news description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 2}x50${i + 2}`,
        buttonText: "Read More"
      }))
      setIndiaNews(indiaData)
    }

    fetchNews()
  }, [])

  return (
    <>
      <h1 className="font-bold  pt-10 px-10 text-5xl">India News</h1>
      {/* Change from grid to flex column */}
      <div className="flex flex-col px-5">
        {indiaNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  )
}
export default India
