const WellnessInsights = () => {
  return (
    <section className="bg-[#edf0e5] py-6 xl:py-16 px-4 sm:px-6  lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-8">
            Wellness Insights
          </h2>
          <p className="text-black mb-10 text-sm sm:text-base leading-relaxed max-w">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer.
          </p>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-30">
            {/* Card 1 */}
            <div>
              <img
                src="/yoga.png" // replace with your image
                alt="Yoga Pose"
                className="rounded-xl w-[628px] h-[747px] object-cover mb-6"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
                Breathe in Serenity, Breathe Out Stress
              </h3>
              <p className="pb-8 text-sm text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <img
                src="/stone.png" // replace with your image
                alt="Tranquility"
                className="rounded-xl w-[421px] h-[505px] object-cover mb-6"
              />
              <h3 className="text-2xl sm:text-3xl  font-bold text-black mb-8">
                Unlock Tranquility: Your Journey to <br/>
                Mindfulness Begins Here
              </h3>
              <p className="pb-8 text-sm text-black mb-">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </p>
              <button className="bg-green-900 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 transition">
                Explore More
              </button>
            </div>
          </div>
        </div>

    </section>
  );
};

export default WellnessInsights;
