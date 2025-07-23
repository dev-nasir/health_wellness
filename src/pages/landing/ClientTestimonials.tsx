import { useState } from "react";

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      name: "LINETTE HAYWARD",
      role: "CEO of Vaco Company",
      bgColor: "bg-green-900",
      textColor: "text-white",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      name: "LOLA BAILEY",
      role: "CEO of Vaco Company",
      bgColor: "bg-[#edf0e5]",
      textColor: "text-gray-800",
    },
    {
      text: "We deliver best-in-class IT services, bringing innovative solutions that help your business grow and thrive in the digital era.",
      name: "MATT JOHNSON",
      role: "CTO of TechCo Solutions",
      bgColor: "bg-blue-900",
      textColor: "text-white",
    },
    {
      text: "Transforming businesses with cutting-edge technology and creative solutions that empower organizations to achieve more.",
      name: "SARAH LEE",
      role: "COO of Innovatech",
      bgColor: "bg-yellow-900",
      textColor: "text-white",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
  };

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length], // This ensures we always show two items, even wrapping at the end
  ];

  return (
    <section className="bg-white py-6 xl:py-16 px-4 sm:px-6 lg:px-20">
      <div className="relative container mx-auto py-6 px-8 xl:px-30 xl:py-16 flex flex-col lg:flex-row items-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/public/team-ceo.png" // Replace with your actual image
              alt="Client"
              className="w-120 h-130 object-cover rounded-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:5xl xl:text-5xl font-bold text-black mb-4">
              What Our Clients Said
            </h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>

            <div>
              {/* Testimonial Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dynamically Render Testimonial Cards */}
                {displayedTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`${testimonial.bgColor} ${testimonial.textColor} p-6 rounded-xl shadow`}
                  >
                    <p className="text-2xl mb-4">❝</p>
                    <p className="text-sm mb-4 leading-relaxed">{testimonial.text}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs">{testimonial.role}</p>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex xl:justify-center justify-end  sm:justify-end  md:justify-end lg:justify-end mt-8 gap-6">
                <button
                  onClick={goToPrev}
                  className="text-green-900 text-xl hover:scale-110 transition"
                >
                  ←
                </button>
                <button
                  onClick={goToNext}
                  className="text-green-900 text-xl hover:scale-110 transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
