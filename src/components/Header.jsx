import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-white border-b border-slate-200">
      <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between h-16">
        <div className="font-semibold text-base sm:text-lg">Himanshu Jain</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 lg:gap-6 items-center text-slate-700">
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#blog" className="hover:text-slate-900 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-2 sm:ml-4 md:hidden flex items-center">
          <button
            aria-label="open menu"
            className="p-2 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
