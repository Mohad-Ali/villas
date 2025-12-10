import { FaFacebookF, FaInstagram, FaTwitter, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 px-6 md:px-16">

      {/* Top Divider */}
      {/* <div className="w-full border-t border-gray-600 my-10"></div> */}

      {/* --- TOP SECTION --- */}
      <div className="flex flex-col md:flex-row justify-around gap-12 md:gap-20">

        {/* LOGO + CONTACT INFO */}
        <div className="flex flex-col items-start gap-4">
          <img
            src="/logo.png"
            alt="Classy Villas Logo"
            className="w-26 h-20 rounded-full"
          />

          {/* Contact Info */}
          <div className="text-gray-400 text-sm space-y-1">
            <p>Email: <span className="text-white">example@gmail.com</span></p>
            <p>Contact: <span className="text-white">+91 9840942784</span></p>
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-5 md:gap-y-8">

          <div className="space-y-3 flex flex-col">
            <Link to={"/about"} className="cursor-pointer hover:text-white transition">About</Link>
            <Link to={"/teams"} className="cursor-pointer hover:text-white transition">Teams / Careers</Link>
            <Link to={"/support"} className="cursor-pointer hover:text-white transition">Support</Link>
          </div>

          <div className="space-y-3 flex flex-col">
            <Link to={"/term"} className="cursor-pointer hover:text-white transition">Terms & Conditions</Link>
            <Link to={"/guest"} className="cursor-pointer hover:text-white transition">Guest Policies</Link>
            <Link to={"/privacy"} className="cursor-pointer hover:text-white transition">Privacy Policies</Link>
            <Link to={"/trust"} className="cursor-pointer hover:text-white transition">Trust and Safety</Link>
          </div>

        </div>

      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-600 my-10"></div>

    <p className="text-gray-400 text-sm text-center">
  {new Date().getFullYear()} © Classyvillas.com
</p>

    </footer>
  );
}
