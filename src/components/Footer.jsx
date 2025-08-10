import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 text-center text-xs sm:text-sm text-slate-500">
        © {new Date().getFullYear()} Himanshu Jain · Built with{" "}
        <span className="font-semibold text-slate-700">React</span>
      </div>
    </footer>
  );
};

export default Footer;
