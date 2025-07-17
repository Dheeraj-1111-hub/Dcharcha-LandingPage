import React from "react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    nameKey: "anjali_name",
    roleKey: "anjali_role",
    quoteKey: "anjali_quote",
    avatar: "A",
  },
  {
    nameKey: "rajesh_name",
    roleKey: "rajesh_role",
    quoteKey: "rajesh_quote",
    avatar: "R",
  },
  {
    nameKey: "priya_name",
    roleKey: "priya_role",
    quoteKey: "priya_quote",
    avatar: "P",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section id='reviews' className="w-full bg-gradient-to-br from-gray-950 to-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="bg-gray-800/70 border border-gray-700 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-[#4FA9DA] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">
                    {user.avatar}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white text-lg">
                    {t(`testimonials.${user.nameKey}`)}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {t(`testimonials.${user.roleKey}`)}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed">
                “{t(`testimonials.${user.quoteKey}`)}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
