const HeroSection = () => {
  return (
    <section
      className="relative bg-cover "
      style={{
        backgroundImage: `url('public/bg-image.png')`, // Correct path for public folder
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-8 xl:px-30 py-16 flex flex-col lg:flex-row  items-center">
        <div className=" flex-1 text-white max-w-lg lg:max-w-xl text-center lg:text-left lg:flex-1">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Personalized
            <br />
            Health & Wellness
            <br />
            Solutions for You
          </h1>

          <p className="mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <button className="bg-background hover:bg-green-700 transition-all duration-300 text-white py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore More
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-1  mt-8 md:mt-10 md:ml-12 ">
          <img
            src="/group-image.png" // Correct path for image in public folder
            alt="Wellness Image"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
