
'use client';
import React, { useEffect } from 'react';
import Main from "@/components/Main";
import Header from "@/components/Header";

export default function Home() {
  useEffect(() => {
    // Add smooth scroll functionality
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const main = document.querySelector('main');
      
      if (targetElement && main) {
        main.scrollTo({
          top: targetElement.offsetTop - main.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="crt-wrapper">
      <div className="crt">
        <div className="screen old-crt-monitor">
          <div className="h-screen w-screen p-4 gap-4 flex flex-col font-[family-name:var(--font-VT323)]">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}
