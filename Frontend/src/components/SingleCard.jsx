import React from 'react'

const SingleCard = ({ title, description, imageUrl, buttonText }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4 flex items-center justify-end">
            <div className="rounded-lg w-full h-72 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={imageUrl}
              />
            </div>
          </div>
          <div className="sm:w-1/2 mb-10 px-4 flex  items-center justify-start text-left">
            <div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                {title}
              </h2>
              <p className="leading-relaxed text-base">
                {description}
              </p>
              <button className="flex  mt-6 text-white bg-red-800 border-0 py-2 px-5 focus:outline-none hover:bg-red-900 rounded">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleCard
