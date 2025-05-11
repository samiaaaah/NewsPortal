import React from 'react'

const LatestSports = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="rounded-lg h-40 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={imageUrl}
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
      <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-2 px-6 rounded w-fit mt-4">
        {buttonText}
      </button>
    </div>
  )
}

export default LatestSports
