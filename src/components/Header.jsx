import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const navLinks = [
  { href: "#", icon: "bx-user-circle", label: "Avatar" },
  { href: "#", icon: "bx-diamond", label: "Arena" },
  { href: "#", icon: "bx-chevrons-up", label: "Beyond" },
  { href: "#", icon: "bx-store", label: "Shop" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const renderNavLinks = () =>
    navLinks.map(({ href, icon, label }) => (
      <a
        key={label}
        href={href}
        className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full text-nowrap flex items-center gap-1"
      >
        <i className={`bx ${icon}`} style={{ color: "#ffffff" }}></i>
        {label}
      </a>
    ));

  return (
    <header className="py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b border-[#babaff] bg-black">
      {/* Left Section */}
      <div className="flex gap-4 lg:gap-14 items-center">
        <img src="/logo.png" alt="Illuvium Logo" className="w-12 md:w-16" />
        <div className="hidden md:flex gap-5">
          <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-white hover:opacity-70 transition-all uppercase">
            Play Now
          </button>
          <button className="h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg font-medium text-white hover:opacity-70 transition-all uppercase">
            NFT Store
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 lg:gap-8">{renderNavLinks()}</nav>

      {/* Mobile Menu Toggle */}
      <button
        className="text-3xl p-2 md:hidden text-white"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <i className={`bx ${mobileMenuOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="fixed top-14 left-0 w-full bg-black p-5 z-40 md:hidden">
          <nav className="flex flex-col gap-4 items-center">{renderNavLinks()}</nav>
          <div className="flex flex-col gap-4 mt-5">
            <button className="bg-purple-700 py-2 px-4 rounded-lg uppercase text-white">
              Play Now
            </button>
            <button className="bg-gray-500 py-2 px-4 rounded-lg uppercase text-white">
              NFT Store
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
