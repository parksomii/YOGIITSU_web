'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        h-20
        ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}
        transition-all duration-300
      `}
    >
      <div className="w-full h-full flex items-center justify-between text-sm" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        {/* 로고 이미지 */}
        <div className="flex items-center">
          <Image
            src="/yogitsu-logo.png"
            alt="Yogitsu Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          
          <a
            href="#yogitsu"
            className="text-white font-normal tracking-tight transition-colors duration-200"
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
          >
            요기있수
          </a>

          <a
            href="#service"
            className="text-white font-normal tracking-tight transition-colors duration-200"
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
          >
            서비스
          </a>

          <a
            href="#review"
            className="text-white font-normal tracking-tight transition-colors duration-200"
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
          >
            리뷰
          </a>

          <a
            href="#team"
            className="text-white font-normal tracking-tight transition-colors duration-200"
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
          >
            팀소개
          </a>

          <a
            href="#download"
            className="text-white font-normal tracking-tight transition-colors duration-200"
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
          >
            다운로드
          </a>

          <button
            className={`
              ${isScrolled ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}
              px-5.5 py-3.5 rounded-full font-normal text-xs
              hover:bg-opacity-90 transition-all duration-300 shadow-md
            `}
          >
            앱 다운로드
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`
            absolute top-full left-0 right-0 
            ${isScrolled ? 'bg-black' : 'bg-black/95'}
            md:hidden shadow-lg
          `}>
            <nav className="flex flex-col p-4 space-y-4">
              <a
                href="#yogitsu"
                className="text-white font-normal tracking-tight transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
                onClick={() => setIsMenuOpen(false)}
              >
                요기있수
              </a>

              <a
                href="#service"
                className="text-white font-normal tracking-tight transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
                onClick={() => setIsMenuOpen(false)}
              >
                서비스
              </a>

              <a
                href="#review"
                className="text-white font-normal tracking-tight transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
                onClick={() => setIsMenuOpen(false)}
              >
                리뷰
              </a>

              <a
                href="#team"
                className="text-white font-normal tracking-tight transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
                onClick={() => setIsMenuOpen(false)}
              >
                팀소개
              </a>

              <a
                href="#download"
                className="text-white font-normal tracking-tight transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
                onClick={() => setIsMenuOpen(false)}
              >
                다운로드
              </a>

              <button
                className={`
                  ${isScrolled ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}
                  px-4 py-2 rounded-full font-normal
                  hover:bg-opacity-90 transition-all duration-300 shadow-md w-full
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                앱 다운로드
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
