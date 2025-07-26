import stress from "../../assets/images/stress.png";
import peaceFull from "../../assets/images/peacefull.png";
import reduce from "../../assets/images/reduce.png";
import mental from "../../assets/images/mental.png";
import Button from "../../components/ui/button";
import { useRef, useState } from "react";

const MeditationSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const videoRef = useRef<any>(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsButtonVisible(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsButtonVisible(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsButtonVisible(true);
  };

  const handleVideoClick = () => {
    if (!videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsButtonVisible(true);
    }
  };
console.log(isPlaying)
  return (
    <section className="bg-[#edf0e5] py-14 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Video with Play Button */}
        <div className="relative w-[300px] sm:w-[350px] md:w-[430px] xl:w-[564px] ">
          <video
            ref={videoRef}
            className="w-full h-[310px] sm:h-[340px] md:h-[410px] lg:h-[410px] xl:h-[510px] object-cover rounded-full overflow-hidden"
            poster="/meditation.png"
            onEnded={handleVideoEnd}
            onClick={handleVideoClick}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {isButtonVisible && (
            <button
              onClick={togglePlay}
              className="absolute top-1/2 -right-[80px] transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 text-white text-xl w-[94px] h-[94px] rounded-full"
            >
              <img src="/play-button.png" alt="play button" />
            </button>
          )}
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left flex-3/5">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-Chocolates font-bold text-heading mb-4">
            Experience Deep Relaxation <br className="hidden xl:block" />
            Start Your Meditation
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base font-Chocolates font-light leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 xl:gap-10 mb-10 xl:mb-18">
            {[
              { label: "Relieving Stress", icon: stress },
              { label: "Peaceful Mind", icon: peaceFull },
              { label: "Reduce Anxiety", icon: reduce },
              { label: "Mental Health", icon: mental },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-start flex-col md:flex-row gap-6 text-sm xl:text-2xl text-[#A8856D]"
              >
                <div className="w-[58px] h-[58px] bg-[#A8856D] rounded-full flex items-center justify-center text-white text-2xl font-Chocolates font-medium">
                  <img src={item.icon} alt="icon" className="w-8" />
                </div>
                {item.label}
              </div>
            ))}
          </div>

          <Button text="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default MeditationSection;
