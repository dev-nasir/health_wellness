import stress from "../../assets/images/stress.png";
import peaceFull from "../../assets/images/peacefull.png";
import reduce from "../../assets/images/reduce.png";
import mental from "../../assets/images/mental.png";
import Button from "../../components/ui/button";
import { useRef, useState } from "react";

const MeditationSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true); // Track button visibility
  const videoRef = useRef<any>(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsButtonVisible(false); // Hide the button when playing
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsButtonVisible(true); // Show the button when paused
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsButtonVisible(true); // Show the button again when video ends
  };

  const handleVideoClick = () => {
    if (!videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsButtonVisible(true); // Show the button when paused
    }
  };
console.log(isPlaying)
  return (
    <section className="bg-[#edf0e5] py-14 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Video with Play Button */}
        
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] " >
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-full overflow-hidden"
            poster="/meditation.png" // Optional: Use a poster image when video is not playing
            onEnded={handleVideoEnd}
            onClick={handleVideoClick}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Dummy video link
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[56px] font-bold text-heading mb-4">
            Experience Deep Relaxation <br />
            Start Your Meditation
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base xl:text-[18px] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-10 mb-18">
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
                <div className="w-[58px] h-[58px] bg-[#A8856D] rounded-full flex items-center justify-center text-white text-2xl font-bold">
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
