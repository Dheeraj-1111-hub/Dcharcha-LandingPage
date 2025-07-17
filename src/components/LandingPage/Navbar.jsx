import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import DcharchaLogo from "../../assets/Dcharcha_Logo-03.png";
import { useTranslation } from "react-i18next";

const navLinks = [
  { labelKey: "features", href: "#features" },
  { labelKey: "howItWorks", href: "#how-it-works" },
  { labelKey: "reviews", href: "#reviews" },
  { labelKey: "contact", href: "#contact" },
];

const FloatingNavbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (navigator.vibrate) navigator.vibrate(30);
  };

  const handleClick = () => {
    if (navigator.vibrate) navigator.vibrate(40);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 pt-6 fixed">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-gray-800/70 border border-gray-700 rounded-3xl shadow-2xl transition-all duration-300">
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover:cursor-pointer">
            <img
              src={DcharchaLogo}
              alt="Dcharcha Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <h1 className="text-2xl font-bold text-white tracking-wide">Dcharcha</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="text-gray-300 hover:text-[#4FA9DA] hover:scale-105 transition-all duration-200 font-medium"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons + Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleClick}
              className="text-gray-300 hover:text-[#4FA9DA] font-medium transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {t("login")}
            </button>
            <button
              onClick={handleClick}
              className="bg-[#4FA9DA] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:brightness-110 hover:scale-105 active:scale-95 transition duration-300"
            >
              {t("getStarted")}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none text-gray-300 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:border-[#4FA9DA] transition duration-200 shadow-sm hover:border-[#4FA9DA] active:scale-95"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="te">తెలుగు</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                ▼
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl text-gray-300 active:scale-90 transition-transform duration-200"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              handleClick();
            }}
          >
            {mobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 space-y-4 border-t border-gray-700 rounded-b-3xl bg-gray-800/70 backdrop-blur-md shadow-inner">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#4FA9DA] transition-all duration-200 font-medium active:scale-95"
                  onClick={handleClick}
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>

            {/* Language Selector */}
            <div className="relative w-full">
              <label htmlFor="language-select" className="text-sm text-gray-400 mb-1 block">
                {t("language") || "Language"}
              </label>
              <select
                id="language-select"
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full appearance-none bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#4FA9DA] transition duration-200 active:scale-95"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="te">తెలుగు</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                ▼
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleClick}
                className="w-full border border-[#4FA9DA] text-[#4FA9DA] hover:bg-[#4FA9DA] hover:text-white px-5 py-2 rounded-full font-medium shadow-sm transition-all duration-300 active:scale-95"
              >
                {t("login")}
              </button>
              <button
                onClick={handleClick}
                className="w-full bg-[#4FA9DA] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition-all duration-300 active:scale-95"
              >
                {t("getStarted")}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default FloatingNavbar;
