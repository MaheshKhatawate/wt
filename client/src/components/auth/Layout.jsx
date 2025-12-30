import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex items-center justify-center gradient-primary w-1/2 px-12 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent" />

        <div className="relative max-w-md space-y-6 text-center text-white z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-6 border border-white/20">
            <span className="text-4xl font-bold text-white">PA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Welcome to Physio Aid
          </h1>
          <p className="text-lg text-teal-50">
            Your personalized physiotherapy companion for better health and
            recovery
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-teal-100">Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-teal-100">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-teal-100">Free</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
