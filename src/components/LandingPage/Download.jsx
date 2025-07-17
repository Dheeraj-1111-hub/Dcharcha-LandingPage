import React from "react";
import { useTranslation } from "react-i18next";
import { FaApple, FaGooglePlay, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdForum, MdNotificationsActive, MdDownload } from "react-icons/md";
import dcharchaLogo from "../../assets/Dcharcha_Logo-03.png";

const TakeDemocracySection = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (navigator.vibrate) navigator.vibrate(40);
  };

  return (
    <main className="w-full bg-gradient-to-br from-gray-950 to-gray-950 text-white sm:pt-1">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              {t("takeDemocracy.title").split("Pocket")[0]}
              <span className="bg-gradient-to-r from-[#4FA9DA] to-blue-500 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(79,169,218,0.4)]">
                Pocket
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              {t("takeDemocracy.description")}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
              <a
                href="#"
                onClick={handleClick}
                className="flex items-center justify-center bg-[#4FA9DA] hover:bg-[#3a96c9] text-white px-6 py-3 rounded-full text-base font-semibold gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                <FaApple className="text-xl" />
                {t("takeDemocracy.appStore")}
              </a>
              <a
                href="#"
                onClick={handleClick}
                className="flex items-center justify-center bg-[#4FA9DA] hover:bg-[#3a96c9] text-white px-6 py-3 rounded-full text-base font-semibold gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                <FaGooglePlay className="text-xl" />
                {t("takeDemocracy.googlePlay")}
              </a>
            </div>

            {/* Ratings */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 1"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User 2"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/53.jpg"
                  alt="User 3"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <FaStarHalfAlt className="text-yellow-400 text-sm" />
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  {t("takeDemocracy.ratingText")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="relative bg-black border-4 border-gray-700 rounded-[2rem] shadow-2xl p-3 w-64 h-[32rem] sm:w-72 sm:h-[34rem] flex flex-col justify-center">
              {/* App screen */}
              <div className="relative rounded-[1.5rem] overflow-hidden border-[10px] border-black bg-black h-full flex items-center justify-center">
                <img
                  src={dcharchaLogo}
                  alt="Dcharcha App"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Download Button */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-5 sm:-right-5 bg-white p-2 rounded-full shadow-md active:scale-90 transition-transform duration-200">
                <div
                  onClick={handleClick}
                  className="bg-[#4FA9DA] w-12 h-12 rounded-full flex items-center justify-center text-white hover:rotate-12 transition-transform active:scale-90"
                >
                  <MdDownload className="text-2xl" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-1/4 -left-6 sm:-left-10 bg-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl shadow-md rotate-3 hover:rotate-0 transition-transform duration-300 max-w-[12rem] active:scale-95">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <MdForum className="text-[#4FA9DA] text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-medium text-gray-900">
                    {t("takeDemocracy.discussionBadge")}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-5 sm:-right-6 bg-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl shadow-md -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-[12rem] active:scale-95">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <MdNotificationsActive className="text-green-500 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-medium text-gray-900">
                    {t("takeDemocracy.updateBadge")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TakeDemocracySection;
