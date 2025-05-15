import "boxicons/css/boxicons.min.css";

const socialLinks = [
  { href: "#", icon: "bx-x", label: "Twitter/X" },
  { href: "#", icon: "bxl-youtube", label: "YouTube" },
  { href: "#", icon: "bxl-discord-alt", label: "Discord" },
  { href: "#", icon: "bxl-linkedin", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-8 px-8 mt-[15%] lg:mt-[25%] md:px-16 border-t border-[#babaff]">
      <img src="/illu-text.png" alt="Illustration Text Logo" className="h-10" />

      <img
        src="/illu-logo.png"
        alt="Main Logo"
        className="h-16 hidden md:inline"
      />

      <div className="flex gap-4">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={icon}
            href={href}
            aria-label={label}
            className="text-2xl md:text-3xl text-white hover:text-violet-400 transition-colors duration-300"
          >
            <i className={`bx ${icon}`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
