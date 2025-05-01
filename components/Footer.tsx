// components/Footer.tsx
import { FaInstagram } from "react-icons/fa";
import { PiThreadsLogo } from "react-icons/pi";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-[#c9d8c1] py-6 px-8 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-extrabold tracking-wide">SYNCED.</div>

      {/* Social Icons */}
      <div className="flex space-x-4 text-2xl mt-4 md:mt-0">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.threads.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <PiThreadsLogo />
        </a>
        <a
          href="https://www.behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaBehance />
        </a>
      </div>

      {/* Email */}
      <a
        href="mailto:info@synced-studio.eu"
        className="mt-4 md:mt-0 font-extrabold underline text-[#c9d8c1] hover:text-white transition"
      >
        INFO@SYNCED-STUDIO.EU
      </a>
    </footer>
  );
};

export default Footer;
