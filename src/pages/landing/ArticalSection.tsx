

const ArticalSection = () => {
  return (
    <section
      className="relative bg-cover bg-center pt-4 pb-10 xl:pt-10 xl:pb-20"
      style={{
        backgroundImage: `url('/artical-bg.png')`, // Correct path for public folder
      }}
    >
      <div className="px-4 text-center mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-size font-Chocolates font-bold text-white mb-10 xl:mb-10">
          Wellness Programs Designed for You
        </h1>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 mt-4 md:mt-12  px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Main Card */}
            <div className="w-full lg:w-[50%] mt-8 md:mt-12">
              <div
                className="relative h-[519px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl shadow-lg"
                style={{
                  backgroundImage: "url('/artical-1.png')", // ✅ correct image path
                }}
              >
                <div className="text-white text-center lg:text-left max-w-2xl pt-16 px-4 xl:px-10">
                  <h1 className="text-xl text-start sm:text-2xl lg:text-3xl  font-Chocolates font-bold mb-4 leading-tight">
                    Nutrition Coaching
                  </h1>
                  <p className="text-sm  text-start sm:text-base lg:text-lg xl:text-[18px] opacity-90 font-Chocolates font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <div className="absolute">
                    <button className="p-2 pt-16 pr-8 rounded-full cursor-pointer text-white transition duration-300 hover:scale-105 hover:text-green-500 xl:hover:text-green-500">
                      <img
                        src="/Arrow 3.png"
                        alt="img"
                        className="w-14 transition duration-300 transform hover:filter hover:invert-[0.4] hover:brightness-125"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Two Cards Stack */}
            <div className="w-full lg:w-[50%] flex flex-col gap-8 mt-8 md:mt-12 ">
              {/* Card 1 */}
              <div
                className="relative h-[244px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl shadow-lg"
                style={{
                  backgroundImage: "url('/artical-2.png')",
                }}
              >
                <div className="text-white text-center lg:text-left max-w-2xl px-4 pb-12 xl:px-10 py-0">
                  <h1 className="text-xl text-start sm:text-2xl lg:text-3xl xl:text-[32px] font-Chocolates font-bold mb-4 leading-tight">
                    Physical Wellness
                  </h1>
                  <p className="mb-6 text-start text-sm sm:text-base lg:4xl lg opacity-90 xl:w-[78%] xl:text-[18px] font-Chocolates font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <div className="absolute">
                    <button className="p-2  rounded-full text-white cursor-pointer transition duration-300 hover:scale-105 hover:text-green-500">
                      <img
                        src="/Arrow 3.png"
                        alt="img"
                        className="w-14 transition duration-300 transform hover:filter hover:invert-[0.4] hover:brightness-125"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="relative h-[244px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl shadow-lg"
                style={{
                  backgroundImage: "url('/artical-3.png')",
                }}
              >
                <div className="text-white  xl:text-center lg:text-left max-w-2xl px-4 pb-12 xl:px-10 py-0">
                  <h1 className="text-xl text-start sm:text-2xl lg:text-3xl font-Chocolates font-bold mb-4 leading-tight">
                    Mental Health Counseling
                  </h1>
                  <p className="text-sm  text-start sm:text-base lg:4xl-lg opacity-90 xl:w-[76%] xl:text-[18px] font-Chocolates font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <div className="absolute">
                    <button className="p-2 pt-8  rounded-full text-white cursor-pointer transition duration-300 hover:scale-105 hover:text-green-500">
                      <img
                        src="/Arrow 3.png"
                        alt="img"
                        className="w-14 transition duration-300 transform hover:filter hover:invert-[0.4] hover:brightness-125"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticalSection;
