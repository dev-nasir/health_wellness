import { useState } from "react";

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      name: "LINETTE HAYWARD",
      role: "CEO of Waoo Company",
      bgColor: "bg-[#1D5A4A]",
      textColor: "text-white",
      icon: "/white-quotation.png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      name: "LOLA BAILEY",
      role: "CEO of Waoo Company",
      bgColor: "bg-[#edf0e5]",
      textColor: "text-gray-800",
      icon: "/double-quotation.png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      name: "MATT JOHNSON",
      role: "CTO of TechCo Solutions",
      bgColor: "bg-blue-900",
      textColor: "text-white",
      icon: "/white-quotation.png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      name: "SARAH LEE",
      role: "COO of Innovatech",
      bgColor: "bg-yellow-900",
      textColor: "text-white",
      icon: "/white-quotation.png",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  };

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/team-ceo.png"
            alt="Client"
            className="w-[300px] md:w-[400px] lg:w-[450px] object-cover rounded-xl"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-Chocolates font-bold text-black mb-4">
            What Our Clients Said
          </h2>
          <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-xl mx-auto lg:mx-0  font-Chocolates font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Testimonial Cards */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.bgColor} ${testimonial.textColor} p-6 rounded-xl shadow-md text-center `}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.icon}
                    alt="quotation"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <p className=" font-Chocolates font-normal mb-10 leading-relaxed">
                  {testimonial.text}
                </p>
                <p className=" font-Chocolates font-medium">
                  {testimonial.name}
                </p>
                <p className="font-Chocolates font-normal text-[#a1a1a1]">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center lg:justify-end mt-6 gap-6">
            <button
              onClick={goToPrev}
              className="text-green-900 text-2xl hover:scale-110 transition"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="text-green-900 text-2xl hover:scale-110 transition"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
