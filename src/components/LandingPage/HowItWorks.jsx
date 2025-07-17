import React from "react";
import { useTranslation } from "react-i18next";
import { User, Landmark, Users } from "lucide-react";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: 1,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
    },
    {
      step: 2,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
    },
    {
      step: 3,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
    },
  ];

  const activities = [
    {
      icon: <User size={18} className="text-white" />,
      color: "bg-[#4FA9DA]",
      title: t("howItWorks.activity1"),
      time: t("howItWorks.time1"),
    },
    {
      icon: <Landmark size={18} className="text-white" />,
      color: "bg-green-500",
      title: t("howItWorks.activity2"),
      time: t("howItWorks.time2"),
    },
    {
      icon: <Users size={18} className="text-white" />,
      color: "bg-purple-500",
      title: t("howItWorks.activity3"),
      time: t("howItWorks.time3"),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-gradient-to-br from-gray-950 to-gray-950 text-white py-20 sm:py-28 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Steps */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-10 tracking-tight">
              {t("howItWorks.title").split("Dcharcha")[0]}
              <span className="bg-gradient-to-r from-[#4FA9DA] to-blue-500 bg-clip-text text-transparent">
                Dcharcha
              </span>
              {t("howItWorks.title").split("Dcharcha")[1]}
            </h2>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.step} className="flex items-start space-x-5 text-left mx-auto max-w-xl">
                  <div className="w-12 h-12 rounded-full bg-[#4FA9DA] text-gray-900 font-semibold text-lg flex items-center justify-center shadow-md border border-[#4FA9DA]/40">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-400 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Activity Feed (hidden on small screens) */}
          <div className="hidden lg:block">
            <div className="bg-[#111827] border border-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 mt-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">{t("howItWorks.recentActivity")}</h3>
                <span className="text-sm text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
                  {t("howItWorks.live")}
                </span>
              </div>

              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition duration-300 shadow-sm"
                  >
                    <div
                      className={`w-9 h-9 ${activity.color} rounded-full flex items-center justify-center shadow-md`}
                    >
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
