import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

// Cursor Component
const Cursor = ({ isHover3d }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: cursorPosition.x - (isHover3d ? 12 : 15),
        y: cursorPosition.y - (isHover3d ? 12 : 15),
        scale: isHover3d ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        className={`rounded-full ${isHover3d ? "bg-violet-500" : "bg-white"}`}
        animate={{
          width: isHover3d ? "24px" : "40px",
          height: isHover3d ? "24px" : "40px",
        }}
        transition={{ duration: 0.2 }}
      />
      {isHover3d && (
        <motion.div
          className="absolute inset-0 rounded-full border border-violet-500"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 2, opacity: 0.5 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

// Avatar Card Component
const AvatarCard = ({ name, stars, img, isSelected, onClick }) => (
  <div
    className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 flex flex-col justify-between px-12 items-center cursor-pointer lg:flex-row border border-gray-100 shadow-[0_0_15px_rgba(167,139,250,0.2)] transition-all duration-300 hover:scale-105"
    onClick={onClick}
  >
    <div className="text-xl font-semibold mb-2">{name}</div>
    <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
      <img src={img} alt={name} />
    </div>
    <div className="flex">
      {[...Array(stars)].map((_, index) => (
        <Star key={index} className="fill-violet-400 text-violet-500 w-4 h-4" />
      ))}
    </div>
    {isSelected && <div className="absolute inset-0 border-2 rounded-lg pointer-events-none" />}
  </div>
);

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("VIKI");
  const [cursorArea, setCursorArea] = useState(false);

  const avatars = {
    VIKI: {
      name: "Viki",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
      pic: "/VIKI.png",
    },
    EVA: {
      name: "Eva",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      stars: 4,
      pic: "/EVA.png",
    },
  };

  const currentCharacter = avatars[selectedCharacter];

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      <Cursor isHover3d={cursorArea} />

      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest uppercase mb-8 md:-mb-14"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}
        >
          fighters
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full h-full p-4 md:flex-row">
        {/* Character Info */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-100 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            <h1 className="text-2xl font-semibold uppercase mb-2">
              {currentCharacter.name}
            </h1>
            <div className="space-y-3 mb-16">
              {["Power", "Stable", "Penetrate", "Portable"].map((key) => {
                const lowerKey = key.toLowerCase();
                return (
                  <div className="flex items-center" key={key}>
                    <span className="w-24 text-gray-400">{key}</span>
                    <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-600 to-white"
                        style={{ width: `${currentCharacter[lowerKey]}%` }}
                      />
                    </div>
                    <span className="ml-2">{currentCharacter[lowerKey]}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md uppercase font-semibold hover:opacity-70 transition-all duration-300">
                Proficient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md uppercase font-semibold hover:opacity-70 transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* Avatar Selector */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(avatars).map(([key, avatar]) => (
              <AvatarCard
                key={key}
                name={avatar.name}
                stars={avatar.stars}
                img={avatar.pic}
                isSelected={selectedCharacter === key}
                onClick={() => setSelectedCharacter(key)}
              />
            ))}
          </div>
        </div>

        {/* 3D Model Section */}
        <div
          className="relative w-full h-80 flex items-center justify-center md:w-2/4 md:h-full overflow-hidden"
          onMouseEnter={() => setCursorArea(true)}
          onMouseLeave={() => setCursorArea(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCharacter}
              className="absolute inset-0"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              <Spline
                scene={
                  selectedCharacter === "VIKI"
                    ? "https://prod.spline.design/7PNqnDp3Z4TICceU/scene.splinecode"
                    : "https://prod.spline.design/4mEhHcvf0Fo5f3MN/scene.splinecode"
                }
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Characters;
