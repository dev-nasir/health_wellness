import { useState, useRef } from "react";
import InputField from "../../components/ui/inputField";
import Button from "../../components/ui/button";

const GetInTouch = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true); // Track button visibility
  const videoRef = useRef<any>(null);

  // Function to toggle play/pause
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

  // Function to handle video ending
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



  console.log(isPlaying);
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto px-8 xl:px-30 py-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Video */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-full" style={{ paddingBottom: "100%" }}>
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              poster="/poster.png" // Optional: add a video poster image
              onEnded={handleVideoEnd}
              onClick={handleVideoClick} // Show button when the video ends
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 text-white text-xl w-[94px] h-[94px] rounded-full"
              >
                <img src="/play-button.png" alt="play button" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Get in Touch Form */}
        <div className="w-full lg:w-1/2 text-center lg:text-left font-Chocolates">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-Chocolates font-bold text-heading mb-2 xl:mb-6">
            Get In Touch
          </h2>
          {/* Contact Form */}
          <form className="space-y-6 max-w-lg mx-auto lg:mx-0 ">
            <div className="flex gap-14">
              <InputField
                label="Your name"
                type="text"
                placeholder="Your name"
              />
              <InputField label="Your email" type="email" placeholder="email" />
            </div>

            <div className="flex gap-14">
              <InputField
                label="Your number"
                type="number"
                placeholder="Phone number "
              />
              <InputField
                label="Your subject"
                type="text"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-heading flex align-item-center">
                Your Message
              </label>
              <textarea
                name="message"
                className="mt-2 w-full p-3 border-b-1 border-b-text-heading  focus:outline-none focus:ring-0 focus:ring-green-900"
                rows={4}
                placeholder="Write your message here..."
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="data-agreement" className="mr-2 " />
              <label htmlFor="data-agreement" className="text-sm text-gray-500">
                I agree that my submitted data is being collected and stored.
              </label>
            </div>
          <Button text="Submit"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
