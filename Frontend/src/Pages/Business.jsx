import Singlecard from "../components/SingleCard";
import React, { useEffect, useState } from 'react'

const Business = () => {
  const [businessNews, setBusinessNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      // Simulating fetch for each section
      const businessData = Array.from({ length: 10 }).map((_, i) => ({
        title: `Business Title ${i + 1}`,
        description: `Sample Business news description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 4}x50${i + 4}`,
        buttonText: "Read More"
      }))
      setBusinessNews(businessData)
    }

    fetchNews()
  }, [])

  return (
    <>
      <h1 className="font-bold pt-10 px-10 text-5xl">Business News</h1>
      <div className="flex flex-col px-5">
        {businessNews.map((item, index) => (
          <Singlecard key={index} {...item} />
        ))}
      </div>
    </>
  )
}
export default Business