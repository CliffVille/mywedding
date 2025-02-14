"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/rsvp", label: "RSVP" },
    { href: "/guestbook", label: "Guestbook" },
    { href: "/gallery", label: "Gallery" },
    { href: "/details", label: "Details" },
    { href: "/registry", label: "Registry" },
  ];

  return (
    <nav className="w-full bg-white shadow-md px-6 lg:px-12">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <img
            src={process.env.NODE_ENV === 'production' ? '/mywedding/love.png' : '/love.png'}
            alt="Logo"
            className="w-10 h-10 rounded-xl object-cover"
          />
        </Link>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md transition ${
                    isActive ? "bg-green-600 text-white" : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded-md transition ${
                    isActive ? "bg-green-600 text-white" : "text-gray-700 hover:text-green-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
