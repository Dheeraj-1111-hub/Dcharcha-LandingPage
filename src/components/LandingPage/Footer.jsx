import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/Dcharcha_Logo-03.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={logo}
                  alt="Dcharcha Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dcharcha</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {[FaTwitter, FaFacebookF, FaLinkedinIn].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="text-sm" />
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.platform.title")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["features", "howItWorks", "security", "privacy"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {t(`footer.platform.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.resources.title")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["docs", "help", "community", "blog"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {t(`footer.resources.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact.title")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["support", "partnership", "press", "careers"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {t(`footer.contact.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs sm:text-sm text-gray-500">
          &copy; 2025 {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
