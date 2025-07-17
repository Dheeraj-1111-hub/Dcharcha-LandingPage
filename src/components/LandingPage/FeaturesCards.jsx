import React from "react";
import { MdForum, MdVisibility, MdDiversity3 } from "react-icons/md";
import { useTranslation } from "react-i18next";

const EmpowermentSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("empowerment.openDiscussionsTitle"),
      description: t("empowerment.openDiscussionsDesc"),
      icon: <MdForum className="text-white text-3xl sm:text-4xl" />,
      gradient: "from-[#4FA9DA] to-blue-500",
      glow: "shadow-[0_0_30px_#4FA9DA33]",
    },
    {
      title: t("empowerment.transparencyTitle"),
      description: t("empowerment.transparencyDesc"),
      icon: <MdVisibility className="text-white text-3xl sm:text-4xl" />,
      gradient: "from-green-500 to-emerald-400",
      glow: "shadow-[0_0_30px_#22c55e33]",
    },
    {
      title: t("empowerment.inclusiveEngagementTitle"),
      description: t("empowerment.inclusiveEngagementDesc"),
      icon: <MdDiversity3 className="text-white text-3xl sm:text-4xl" />,
      gradient: "from-purple-600 to-fuchsia-500",
      glow: "shadow-[0_0_30px_#a855f733]",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-gradient-to-b from-gray-950 via-gray-950 to-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 px-2 sm:px-4">
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            {t("empowerment.headingStart")}{" "}
            <span className="bg-gradient-to-r from-[#4FA9DA] to-blue-500 bg-clip-text text-transparent">
              {t("empowerment.headingHighlight")}
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("empowerment.subheading")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative p-5 sm:p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 
                          backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] 
                          hover:shadow-xl ${feature.glow}`}
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6 rounded-xl flex items-center justify-center 
                            bg-gradient-to-br ${feature.gradient} shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSection;
