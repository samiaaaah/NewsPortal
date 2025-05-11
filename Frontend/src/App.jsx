import React, { useEffect, useState } from 'react'
import Herocard from './components/Herocard'
import LatestBusiness from './components/LatestBusiness'
import LatestIndia from './components/LatestIndia'
import LatestSports from './components/LatestSports'
import LatestWorld from './components/LatestWorld'
import LoginForm from './Pages/Login'


const App = () => {
  const [businessNews, setBusinessNews] = useState([])
  const [indiaNews, setIndiaNews] = useState([])
  const [sportsNews, setSportsNews] = useState([])
  const [worldNews, setWorldNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      // Simulating fetch for each section
      const businessData = Array.from({ length: 5 }).map((_, i) => ({
        title: `Business Title ${i + 1}`,
        description: `Sample business description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 1}x50${i + 1}`,
        buttonText: "Read More"
      }))
      setBusinessNews(businessData)

      const indiaData = Array.from({ length: 5 }).map((_, i) => ({
        title: `India Title ${i + 1}`,
        description: `Sample India news description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 2}x50${i + 2}`,
        buttonText: "Read More"
      }))
      setIndiaNews(indiaData)

      const sportsData = Array.from({ length: 5 }).map((_, i) => ({
        title: `Sports Title ${i + 1}`,
        description: `Sample sports description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 3}x50${i + 3}`,
        buttonText: "Read More"
      }))
      setSportsNews(sportsData)

      const worldData = Array.from({ length: 5 }).map((_, i) => ({
        title: `World Title ${i + 1}`,
        description: `Sample world news description ${i + 1}`,
        imageUrl: `https://dummyimage.com/12${i + 4}x50${i + 4}`,
        buttonText: "Read More"
      }))
      setWorldNews(worldData)
    }

    fetchNews()
  }, [])

  return (
    <>
    
      <Herocard />
      
      {/* Business News Section */}
      <h1 className="font-bold p-4 text-2xl">Business News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {businessNews.map((item, index) => (
          <LatestBusiness
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            buttonText={item.buttonText}
          />
        ))}
      </div>

      {/* India News Section */}
      <h1 className="font-bold p-4 text-2xl">India News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {indiaNews.map((item, index) => (
          <LatestIndia
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            buttonText={item.buttonText}
          />
        ))}
      </div>

      {/* Sports News Section */}
      <h1 className="font-bold p-4 text-2xl">Sports News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {sportsNews.map((item, index) => (
          <LatestSports
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            buttonText={item.buttonText}
          />
        ))}
      </div>

      {/* World News Section */}
      <h1 className="font-bold p-4 text-2xl">World News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
        {worldNews.map((item, index) => (
          <LatestWorld
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            buttonText={item.buttonText}
          />
        ))}
      </div>
     
    </>
  )
}

export default App
