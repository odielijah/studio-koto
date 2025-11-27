import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import kotoLogo from "../../assets/images/koto-logo.png";
import "../../assets/styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // to get current path

  const handleLinkClick = () => setMenuOpen(false);

  const links = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const footerLinks = [
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Off Newsletter", url: "#" },
    { name: "Off Live", url: "#" },
    { name: "Seasoned", url: "#" },
  ];

  function ArrowIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="text-white h-[9px]"
      >
        <path
          fill="currentColor"
          d="M24 20.414v1.103h-2.207V3.587L1.38 24 0 22.345 20.138 2.207H2.207V0H24v20.414Z"
        />
      </svg>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        menuOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="nav-panel">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div className="nav-panel-logo cursor-pointer outline-none">
            <Link to="/">
              <img
                src={kotoLogo}
                alt="Koto Logo"
                className="w-[61px] h-[30px] outline-none"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div
            className="menu-nav md:hidden text-white uppercase font-mono font-light cursor-pointer transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex text-white items-center gap-10 uppercase font-mono font-light text-sm">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`relative pb-1 transition-colors duration-300 hover:text-gray-300`}
                >
                  {link.name}

                  {/* underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-[.5px] bg-white transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile nav */}
          <ul
            className={`uppercase md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col p-6 pt-0 transition-all duration-500 ease-in-out ${
              menuOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-2"
            }`}
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block space-mono text-[30px] transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Social links only for mobile */}
            <li className="pt-5 mt-5 border-white border-t-[.5px] flex flex-col gap-3">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center gap-2 space-mono text-[12px] transition-colors duration-300 hover:text-gray-300"
                >
                  <ArrowIcon />
                  {link.name}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
