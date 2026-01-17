"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤 시 드롭다운 메뉴 자동 닫기
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleScroll = () => {
        setIsMobileMenuOpen(false);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobileMenuOpen]);

  const handleHomeClick = () => {
    sessionStorage.setItem('skipTypewriter', 'true');
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            onClick={handleHomeClick}
          >
            <span className="text-xl font-bold text-gray-900">
              {site.enName}
            </span>
          </Link>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onClick={handleHomeClick}
            >
              홈
            </Link>
            <Link
              href="/history"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              연혁
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

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full right-4 mt-2 w-48 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl z-50 md:hidden overflow-hidden"
            >
              <div className="py-2">
                <Link
                  href="/"
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b-2 border-gray-200"
                  onClick={handleHomeClick}
                >
                  홈
                </Link>
                <Link
                  href="/history"
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b-2 border-gray-200"
                  onClick={handleLinkClick}
                >
                  연혁
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b-2 border-gray-200"
                  onClick={handleLinkClick}
                >
                  팀
                </Link>
                <Link
                  href="/business"
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  비즈니스
                </Link>
                <div className="pt-2 pb-1">
                  <a
                    href={`tel:${site.phone}`}
                    className="block mx-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-center text-sm"
                    onClick={handleLinkClick}
                  >
                    문의하기
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

