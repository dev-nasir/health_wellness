const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background mb-4">
            Strengthen Your <br /> Core, Strengthen Your Soul.
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-background text-white px-6 py-2 rounded-full font-semibold hover:bg-green-900 transition">
            Get a Quote
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="flex justify-items-center items-center">
            {/* Circle Image */}
            <div className="w-81 h-120  overflow-hidden shadow-lg mb-6">
              <img
                src="/public/services.png" // Replace with actual image name
                alt="Wellness Woman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <div className="w-20 h-20  overflow-hidden shadow-lg  ml-10">
                <img
                  src="/public/print.png" // Replace with actual image name
                  alt="Wellness Woman"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text beside image */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-2 ">
                No Lies, No Medicines For <br /> Better Body And Health.
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6">
                Non ridiculus praesent ullamcorper tincidunt tempor enim
                consectetur.
              </p>
            </div>
          </div>
          {/* Stats Row */}
          <div className="bg-background text-white rounded-xl w-full max-w-md shadow-md flex flex-col sm:flex-row text-center divide-y sm:divide-y-0 sm:divide-x divide-white -mt-40">
            <div className="flex-1 px-4 py-4">
              <p className="text-2xl font-bold">10K</p>
              <p className="text-sm">Individuals have joined our community</p>
            </div>
            <div className="flex-1 px-4 py-4">
              <p className="text-2xl font-bold">95%</p>
              <p className="text-sm">Participants reduced stress</p>
            </div>
            <div className="flex-1 px-4 py-4">
              <p className="text-2xl font-bold">8 / 10</p>
              <p className="text-sm">Users experienced improved sleep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
