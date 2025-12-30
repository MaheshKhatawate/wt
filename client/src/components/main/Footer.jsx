import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl shadow-sm">
              <img
                src="/images/logo.webp"
                alt="Physio Aid Logo"
                className="w-7 h-7 object-contain rounded bg-white"
                style={{ background: "transparent" }}
              />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Physio Aid
              </span>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Your health companion
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Physio Aid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
