const Hero = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden flex justify-center items-end mb-[10%]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/hero.mp4"
        autoPlay
        loop
        muted
      />

      <div className="mb-[15%] flex flex-col items-center gap-4 text-center px-4">
        <img
          src="/illu-text.png"
          alt="Illustration Text"
          className="w-[20rem] md:w-[30rem]"
        />

        <h1 className="text-xl md:text-2xl font-bold text-white">
          Explore, Capture, Compare
        </h1>

        <div className="w-3/4 md:w-[75%] h-px bg-[#baba]" />

        <button className="h-10 px-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-white uppercase hover:opacity-70 transition-all duration-300">
          Play Now
        </button>

        <div className="flex items-center gap-3 text-3xl font-semibold text-gray-200">
          <img src="/illu-logo.png" alt="Logo" className="h-12 md:h-16" />
          ZERO
        </div>

        <p className="max-w-[80%] text-[#baba] text-sm md:text-base">
          Notice: Illuvium Games are in Beta. Participation involves risk. Read our full disclaimer here.
        </p>
      </div>

      {/* Scroll Animation */}
      <div className="absolute bottom-40 right-5 lg:right-24 animate-bounce hidden sm:inline-block">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1">
            <div className="w-1 h-3 bg-[#babaff] rounded-full animate-pulse" />
          </div>
          <p className="text-[#babaff] mt-2 text-sm">Scroll Down</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
