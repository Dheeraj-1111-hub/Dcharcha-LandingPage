import React from "react";
import { MdCheck } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  const policy = {
    title: t("policyTitle"),
    description: t("policyDescription"),
    participants: 247,
    status: t("policyStatus"),
  };

  return (
    <main className="w-full bg-gradient-to-br from-gray-900 to-gray-950 text-white min-h-screen pt-48">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              {t("heroTitleStart")}{" "}
              <span className="bg-gradient-to-r from-[#4FA9DA] to-blue-500 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(79,169,218,0.4)]">
                {t("heroTitleHighlight")}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
              <button className="bg-[#4FA9DA] hover:bg-[#3a96c9] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:cursor-pointer shadow-md hover:shadow-[#4FA9DA]/40">
                <FaGooglePlay className="text-xl sm:text-2xl" />
                {t("buttonGetApp")}
              </button>

              <button className="border border-gray-500 text-gray-300 hover:text-[#4FA9DA] hover:border-[#4FA9DA] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                {t("buttonLearnMore")}
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden md:block relative">
            <div className="bg-gray-800/70 border border-gray-700 rounded-3xl shadow-xl p-6 lg:p-8 backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                  <MdCheck className="text-white text-lg" />
                </div>
                <span className="text-gray-300 font-medium">
                  {t("policyLiveLabel")}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                {policy.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                {policy.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User 1"
                      className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-gray-800 object-cover"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="User 2"
                      className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-gray-800 object-cover"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/53.jpg"
                      alt="User 3"
                      className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-gray-800 object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-400">
                    +{policy.participants} {t("participants")}
                  </span>
                </div>

                <span className="text-xs font-medium px-3 py-1 bg-green-600/10 text-green-400 border border-green-500 rounded-full">
                  {policy.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
