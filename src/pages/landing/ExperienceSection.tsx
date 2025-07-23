export default function MeditationWorkshop() {
  return (
    <section className="bg-[#edf0e5] py-6 xl:py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-2xl  sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Experience Together Meditation
              <br />
              Workshops and Retreats
            </h1>
          </div>
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors ml-8 whitespace-nowrap">
            View More
          </button>
        </div>
        {/* Description Text */}
        <div className="mb-12 max-w-4xl">
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled.
          </p>
        </div>
        {/* Images Grid */}
        <div className="grid grid-cols-12 gap-6 ">
          {/* Image 1 - Top Left */}
          <div className="col-span-4 row-span-1">
            <div className="overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/exp-1.png" // Replace with your actual image
                  alt="Experience 1"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          {/* Image 2 - Center Large */}
          <div className="col-span-4 row-span-2">
            <div className=" overflow-hidden ">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/exp-3.png" // Replace with your actual image
                  alt="Experience 3"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          {/* Image 3 - Top Right */}
          <div className="col-span-4 row-span-1">
            <div className="overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/exp-4.png" // Replace with your actual image
                  alt="Experience 4"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          {/* Image 4 - Bottom Left */}
          <div className="col-span-4 row-span-1">
            <div className=" overflow-hidden ">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/exp-2.png" // Replace with your actual image
                  alt="Experience 2"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          {/* Image 5 - Bottom Right */}
          <div className="col-span-4 row-span-1">
            <div className="overflow-hidden ">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/exp-5.png" // Replace with your actual image
                  alt="Experience 5"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
