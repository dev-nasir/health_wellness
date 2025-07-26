import Button from "../../components/ui/button";

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl  xl:text-[46px] font-Chocolates font-bold text-heading mb-10">
            Strengthen Your <br /> Core, Strengthen Your Soul.
          </h2>
          <p className="text-gray-600 mb-10 text-sm sm:text-base leading-relaxed xl:text-[18px] font-Chocolates font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button text="Get a Quote" />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center relative ">
          <div className="flex flex-col sm:flex-row items-start justify-center gap-6 ">
            {/* Main Image */}
            <div className="w-full overflow-hidden mb-6">
              <img
                src="/services.png"
                alt="Wellness Woman"
                className=" object-cover"
              />
            </div>

            {/* Side Text + Small Image */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="mt-6 overflow-hidden flex items-start -mb-2 xl:-mb-4">
                <img
                  src="/print.png"
                  alt="Print Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl text-heading mb-2 xl:mb-4 xl:text-2xl font-Chocolates font-semibold">
                No Lies, No Medicines For <br className="hidden xl:block"/> Better Body And Health.
              </h3>
              <p className="text-sm text-black xl:text-[18px] mb-20 font-Chocolates font-normal">
                Non ridiculus praesent ullamcorper tincidunt tempor enim
                consectetuer.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="-mt-60 ml-0 bg-background text-white rounded-[23px] xl:ml-auto w-[90%]  flex flex-col sm:flex-row text-center  sm:divide-y- sm:divide-x divide-white  lg:-mt-20 xl:-mt-42">
            <div className="flex-1 px-4 py-4">
              <p className="text-2xl font-Chocolates font-extrabold">10K</p>
              <p className="text-sm pt-2 font-Chocolates font-light">
                Individuals have joined our community
              </p>
            </div>
            <div className="flex-1 px-4 py-4">
              <p className="text-2xl font-Chocolates font-bold">95%</p>
              <p className="text-sm pt-2 font-Chocolates font-light">Participants reduced stress</p>
            </div>
            <div className="flex-1 px-4 py-4">
              <p className="text-2xl font-Chocolates font-bold">8 / 10</p>
              <p className="text-sm pt-2 font-Chocolates font-light">Users experienced improved sleep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
