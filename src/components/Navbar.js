import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AnimatedText from "./AnimatedText";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative group transition duration-300 ${
      isActive ? "text-blue-400" : "text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full nav-glass px-6 py-4 flex justify-between items-center z-40">

      {/* Logo */}
      <AnimatedText />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <NavLink to="/" className={linkClass}>
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

        <NavLink to="/services" className={linkClass}>
          Services
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

        <NavLink to="/portfolio" className={linkClass}>
          Portfolio
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full nav-glass flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <NavLink to="/" onClick={() => setOpen(false)} className="btn btn-outline">Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="btn btn-outline">About</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)} className="btn btn-outline">Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setOpen(false)} className="btn btn-outline">Portfolio</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="btn btn-primary">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}