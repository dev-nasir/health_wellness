const ArticalSection = () => {
  return (
    <section
       className="relative bg-cover bg-center pt-10 pb-20"
      style={{
        backgroundImage: `url('public/artical-bg.png')`, // Correct path for public folder
      }}
    >
     <div className="px-4 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Wellness Programs Designed for You
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative container mx-auto px-8 xl:px-30  flex flex-col lg:flex-row  items-center">
          <div className="flex-1 mt-8 md:mt-10 md:ml-12">
            <div
              className="relative bg-cover z-10 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[617px] h-[519px] flex justify-center items-center rounded-xl shadow-lg"
              style={{
                backgroundImage: `url('public/artical-1.png')`, // Correct path for public folder
              }}
            >
              <div className=" flex-1 text-white max-w-lg lg:max-w-xl text-center lg:text-left lg:flex-1">
                <h1 className="text-1xl sm:text-1xl lg:text-2xl xl:text-3xl font-bold mb-6 sm:mb-8  leading-tight">
                  Nutrition Coaching
                </h1>
                <p className="mb-8 sm:mb-10 text-sm sm:text-base lg:text-sm leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 mt-8 md:mt-10 md:ml-12 ">
            <div
              className="relative bg-cover z-10 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[673px] h-[244px] flex justify-center items-center rounded-xl shadow-lg"
              style={{
                backgroundImage: `url('public/artical-2.png')`, // Correct path for public folder
              }}
            >
              <div className=" flex-1 text-white max-w-lg lg:max-w-xl text-center lg:text-left lg:flex-1">
                <h1 className="text-1xl sm:text-1xl lg:text-2xl xl:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
                  Physical Wellness
                </h1>
                <p className="mb-8 sm:mb-10 text-sm sm:text-base lg:text-sm leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            <div
              className="relative bg-cover z-10 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[673px] h-[244px] flex justify-center items-center rounded-xl shadow-lg"
              style={{
                backgroundImage: `url('public/artical-3.png')`, // Correct path for public folder
              }}
            >
              <div className=" flex-1 text-white max-w-lg lg:max-w-xl text-center lg:text-left lg:flex-1">
                <h1 className="text-1xl sm:text-1xl lg:text-2xl xl:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
                  Mental Health Counseling
                </h1>
                <p className="mb-8 sm:mb-10 text-sm sm:text-base lg:text-sm leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticalSection;
