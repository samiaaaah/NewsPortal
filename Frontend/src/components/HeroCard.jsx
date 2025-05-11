const HeroCard = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto px-5 py-15">
    <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <img
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="https://dummyimage.com/1200x500"
      />
      <div className="relative z-10 h-full flex flex-col justify-end pl-10 pb-16 max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shooting Stars</h1>
        <p className="text-lg text-gray-800 mb-6">
          Skateboard +1 mustache fixie paleo lumbersexual. Explore a world of style and creativity with us.
        </p>
        <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-2 px-6 rounded w-fit">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroCard;
