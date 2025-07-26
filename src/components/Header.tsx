'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MegaMenu from './MegaMenu';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [headerHeight, setHeaderHeight] = useState(72);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll handling logic can be added here if needed
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeaderHeight);
    
    // 초기 높이 설정
    updateHeaderHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    if (label === '제품/솔루션') {
      setIsMegaMenuOpen(true);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
      setIsMegaMenuOpen(false);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setIsMegaMenuOpen(false);
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleMegaMenuClose = () => {
    setIsMegaMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/products', label: '제품/솔루션', isMegaMenu: true },
    { href: '/support', label: '지원',
      subLinks: [
        { href: '/support#faq', label: '자주 묻는 질문' },
        { href: '/support#contact', label: '문의하기' },
      ],
    },
    { href: '/rnd', label: '기술 연구소',
      subLinks: [
        { href: '/rnd#overview', label: '연구 개요' },
        { href: '/rnd#technologies', label: '핵심 기술' },
        { href: '/rnd#achievements', label: '연구 성과' },
      ],
    },
    { href: '/about', label: '회사소개',
      subLinks: [
        { href: '/about#ceo', label: 'CEO 인사말' },
        { href: '/about#history', label: '회사 연혁' },
        { href: '/about#location', label: '오시는 길' },
      ],
    },
    { href: '/careers', label: '채용',
      subLinks: [
        { href: '/careers#apply', label: '지원하기' },
        { href: '/careers#info', label: '회사 정보보기' },
      ],
    },
  ];


  return (
    <>
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/images/LOGOO.jpg"
            alt="NBPKOREA"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                className={`relative py-2 px-1 text-gray-800 hover:text-red-600 transition-all duration-300 font-medium ${
                  link.isMegaMenu ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300' : ''
                }`}
              >
                {link.label}
                {link.isMegaMenu && (
                  <svg className="inline-block ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {!link.isMegaMenu && link.subLinks && (
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-100 py-2 z-40 transition-all duration-300 ${
                    activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.subLinks?.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-lg mx-2"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/support"
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2.5 rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            견적문의
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-800 hover:text-red-600 transition-colors font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/support"
              className="block w-full text-center bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 font-medium mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              견적문의
            </Link>
          </div>
        </div>
      )}
    </header>
    
    {/* Mega Menu Component */}
    <div
      onMouseEnter={() => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
      }}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onClose={handleMegaMenuClose}
        headerHeight={headerHeight}
      />
    </div>
    </>
  );
};

export default Header;
