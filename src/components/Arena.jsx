import "boxicons/css/boxicons.min.css";

const videoCards = [
  { src: "/bento-card3.mp4", title: "Scoriox" },
  { src: "/bento-card4.mp4", title: "Floralynx" },
  { src: "/bento-card5.mp4", title: "Titanor" },
];

const Arena = () => {
  return (
    <div className="p-0 mt-60 md:min-h-[90%] lg:p-8 md:mt-0">
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-28"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250, 0.5)",
          }}
        >
          Arena
        </h1>
      </div>

      {/* Grid layout */}
      <section className="w-[90%] mx-auto grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 lg:max-w-[90%]">
        {/* Left Column */}
        <div className="space-y-4 md:col-span-1 md:space-y-6">
          {/* Card 1: NFT Store */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] hover:scale-105 transition-transform duration-300">
            <img src="/bento-card1.png" alt="NFT Store" className="w-full h-full object-cover" />
            <button
              className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 uppercase text-2xl font-bold hover:text-yellow-400 transition-all duration-300"
              aria-label="NFT Store"
            >
              <i className="bx bxs-store mr-2"></i> nft store
            </button>
          </div>

          {/* Card 2: Video */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] hover:scale-105 transition-transform duration-300">
            <video
              src="/bento-card2.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:col-span-2 md:space-y-6">
          {/* Top 3 Video Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            {videoCards.map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden border border-white rounded-3xl aspect-square hover:scale-105 transition-transform duration-300"
              >
                <video
                  src={card.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-2xl font-extrabold text-white">
                  {card.title}
                </h1>
              </div>
            ))}
          </div>

          {/* Large Banner Card */}
          <div className="relative overflow-hidden border border-white rounded-3xl aspect-[16/9] hover:scale-[1.02] transition-transform duration-300 md:col-span-2">
            <img src="/bento-card5.png" alt="Buy Now Banner" className="w-full h-full object-cover" />
            <button
              className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 uppercase text-2xl font-bold hover:text-yellow-400 transition-all duration-300"
              aria-label="Buy Now"
            >
              <i className="bx bx-link-external mr-2"></i> Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arena;
