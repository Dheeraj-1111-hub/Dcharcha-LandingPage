import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLocationOn, MdCall, MdEmail, MdSchedule } from "react-icons/md";

const ContactSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("contactSection.alert"));
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MdLocationOn size={22} />,
      title: t("contactSection.location.title"),
      text: t("contactSection.location.text"),
    },
    {
      icon: <MdCall size={22} />,
      title: t("contactSection.phone.title"),
      text: t("contactSection.phone.text"),
    },
    {
      icon: <MdEmail size={22} />,
      title: t("contactSection.email.title"),
      text: t("contactSection.email.text"),
    },
    {
      icon: <MdSchedule size={22} />,
      title: t("contactSection.hours.title"),
      text: t("contactSection.hours.text"),
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-gray-950 to-gray-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t("contactSection.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("contactSection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-gray-800/60 border border-gray-700 p-5 sm:p-6 rounded-2xl backdrop-blur-md shadow-lg hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="min-w-[3rem] min-h-[3rem] bg-gradient-to-br from-[#4FA9DA] to-blue-500 rounded-full flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/70 border border-gray-700 rounded-3xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    {t("contactSection.form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contactSection.form.name_placeholder")}
                    required
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 text-white text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    {t("contactSection.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contactSection.form.email_placeholder")}
                    required
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 text-white text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-300 mb-2"
                >
                  {t("contactSection.form.subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contactSection.form.subject_placeholder")}
                  required
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 text-white text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-2"
                >
                  {t("contactSection.form.message")}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contactSection.form.message_placeholder")}
                  required
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 text-white text-sm sm:text-base rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4FA9DA] to-blue-500 
             hover:from-[#3a96c9] hover:to-[#318cc1] 
             text-white font-semibold py-3 sm:py-4 
             rounded-full shadow-lg hover:shadow-blue-500/30 
             transition-all duration-300 transform 
             hover:scale-105 active:scale-95 
             text-sm sm:text-base"
              >
                {t("contactSection.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
