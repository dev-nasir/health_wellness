const ArticalSection = () => {
  return (
    <section
      className="relative bg-cover bg-center pt-10 pb-20"
      style={{
        backgroundImage: `url('/artical-bg.png')`, // Correct path for public folder
      }}
    >
      <div className="px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-size font-bold text-white mb-10">
          Wellness Programs Designed for You
        </h1>
      </div>

    
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 mt-8 md:mt-12 md:ml-12 px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Main Card */}
            <div className="w-full lg:w-[50%] mt-8 md:mt-12">
              <div
                className="relative h-[519px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl shadow-lg"
                style={{
                  backgroundImage: "url('/artical-1.png')", // ✅ correct image path
                }}
              >
                <div className="text-white text-center lg:text-left max-w-2xl px-4">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                    Nutrition Coaching
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Two Cards Stack */}
            <div className="w-full lg:w-[50%] flex flex-col gap-8 mt-8 md:mt-12">
              {/* Card 1 */}
              <div
                className="relative h-[244px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl shadow-lg"
                style={{
                  backgroundImage: "url('/artical-2.png')",
                }}
              >
                <div className="text-white text-center lg:text-left max-w-2xl px-4">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                    Physical Wellness
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="relative h-[244px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl shadow-lg"
                style={{
                  backgroundImage: "url('/artical-3.png')",
                }}
              >
                <div className="text-white text-center lg:text-left max-w-2xl px-4">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                    Mental Health Counseling
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
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


