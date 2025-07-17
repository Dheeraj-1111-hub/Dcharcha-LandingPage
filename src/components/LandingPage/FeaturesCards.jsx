import React from "react";
import { MdForum, MdVisibility, MdDiversity3 } from "react-icons/md";
import { useTranslation } from "react-i18next";

const EmpowermentSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("empowerment.openDiscussionsTitle"),
      description: t("empowerment.openDiscussionsDesc"),
      icon: <MdForum className="text-white text-2xl" />,
      gradient: "from-[#4FA9DA] to-blue-500",
      glow: "shadow-[0_0_30px_#4FA9DA33]",
    },
    {
      title: t("empowerment.transparencyTitle"),
      description: t("empowerment.transparencyDesc"),
      icon: <MdVisibility className="text-white text-2xl" />,
      gradient: "from-green-500 to-emerald-400",
      glow: "shadow-[0_0_30px_#22c55e33]",
    },
    {
      title: t("empowerment.inclusiveEngagementTitle"),
      description: t("empowerment.inclusiveEngagementDesc"),
      icon: <MdDiversity3 className="text-white text-2xl" />,
      gradient: "from-purple-600 to-fuchsia-500",
      glow: "shadow-[0_0_30px_#a855f733]",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-gradient-to-b from-gray-950 via-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {t("empowerment.headingStart")}{" "}
            <span className="bg-gradient-to-r from-[#4FA9DA] to-blue-500 bg-clip-text text-transparent">
              {t("empowerment.headingHighlight")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            {t("empowerment.subheading")}
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${feature.glow}`}
            >
              <div
                className={`w-12 h-12 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 z-10 relative">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed z-10 relative">
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
