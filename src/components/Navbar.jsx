"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/data/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {site.enName}
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              홈
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              팀
            </Link>
            <Link
              href="/business"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              비즈니스
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

