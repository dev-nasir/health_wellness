import stress from "../../assets/images/stress.png";
import peaceFull from "../../assets/images/peacefull.png";
import reduce from "../../assets/images/reduce.png";
import mental from "../../assets/images/mental.png";

const MeditationSection = () => {
  return (
    <section className="bg-[#edf0e5] py-12 px-4 sm:px-6 lg:px-20">
      {/* <div className="relative container mx-auto px-8 xl:px-30 py-16 flex flex-col lg:flex-row  items-center"> */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image with Play Button */}
        <div className="relative  flex-2/5 rounded-full overflow-hidden">
          <img
            src="/public/meditation.png" // Replace with your actual image path
            alt="Meditation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className=" text-center lg:text-left flex-3/5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-size font-bold text-heading mb-4">
            Experience Deep Relaxation <br />
            Start Your Meditation
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2  gap-10 mb-6">
            {[
              { label: "Relieving Stress", icon: stress },
              { label: "Peaceful Mind ", icon: peaceFull },
              { label: "Reduce Anxiety", icon: reduce },
              { label: "Mental Health", icon: mental },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-start flex-col md:flex-row  gap-2 text-sm xl:text-2xl text-[#A8856D]"
              >
                <div className="w-[58px] h-[58px] bg-[#A8856D] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  <img src={item.icon} alt="icon" className="w-8" />
                </div>
                {item.label}
              </div>
            ))}
          </div>

          <button className="bg-green-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition">
            Contact Us
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default MeditationSection;
