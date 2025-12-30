import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Eye,
  Smile,
  Activity,
  Users,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  Zap,
} from "lucide-react";

const Home = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const specialties = [
    {
      icon: Activity,
      title: "Pain Management",
      description: "Expert guidance for chronic and acute pain relief",
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
    },
    {
      icon: Heart,
      title: "Sports Injury",
      description: "Recovery programs for athletic injuries",
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
    },
    {
      icon: Users,
      title: "Post-Surgery Rehab",
      description: "Structured rehabilitation after surgical procedures",
      color: "bg-green-500",
      lightColor: "bg-green-50",
    },
    {
      icon: Brain,
      title: "Neurological Therapy",
      description: "Specialized care for neurological conditions",
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
    },
    {
      icon: Users,
      title: "Elderly Care",
      description: "Mobility and strength programs for seniors",
      color: "bg-lime-500",
      lightColor: "bg-lime-50",
    },
    {
      icon: Stethoscope,
      title: "Preventive Care",
      description: "Exercises to prevent injuries and maintain wellness",
      color: "bg-teal-600",
      lightColor: "bg-teal-50",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Personalized Care",
      description:
        "Get recommendations tailored to your specific symptoms and pain areas",
    },
    {
      icon: Zap,
      title: "Quick Assessment",
      description:
        "Receive instant guidance on home remedies and exercises to try",
    },
    {
      icon: Shield,
      title: "Expert Referrals",
      description:
        "Connect with trusted specialists when home care isn't enough",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Select Pain Area",
      description: "Tell us where you're experiencing discomfort or pain",
    },
    {
      step: "02",
      title: "Get Recommendations",
      description:
        "Receive personalized home remedies and preventive care tips",
    },
    {
      step: "03",
      title: "Track Progress",
      description: "Monitor your recovery in your personal dashboard",
    },
    {
      step: "04",
      title: "Specialist Support",
      description: "Get referred to the right specialist if needed",
    },
  ];

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${10 + Math.random() * 10}s`,
  }));

  return (
    <div className="w-full">
      {/* Hero Section with CRAZY effects */}
      <section className="relative animated-gradient text-white overflow-hidden min-h-screen flex items-center">
        {/* Floating particles background */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-grid-white/[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full mb-8 border-2 border-white/30 neon-border animate-fade-in-up">
              <Sparkles className="w-5 h-5 animate-float" />
              <span className="text-sm font-bold cyber-glow">
                Your Healthcare Companion
              </span>
            </div>

            {/* Main headline with crazy effects */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-scale-in">
              <span className="cyber-glow">Expert Physiotherapy Care,</span>
              <br />
              <span className="rainbow-text text-6xl md:text-8xl">
                Tailored for You
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Your personalized physiotherapy companion. Get expert guidance,
              targeted exercises, and effective remedies for{" "}
              <span className="font-bold cyber-glow">pain relief</span> and
              recovery.
            </p>

            {/* CTA Buttons with crazy effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-300">
              <Button
                size="lg"
                className="bg-white cursor-pointer text-teal-600 hover:bg-teal-50 px-10 py-7 text-xl font-black shadow-2xl ripple-effect neon-border transform hover:scale-110 transition-all duration-300"
                onClick={() =>
                  navigate(isAuthenticated ? "/dashboard" : "/auth/register")
                }
              >
                <Zap className="w-6 h-6 mr-2 bounce-rotate" />
                {isAuthenticated ? "Go to Dashboard" : "Get Started FREE"}
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 cursor-pointer backdrop-blur-sm border-3 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-7 text-xl font-black shake-hover transform transition-all duration-300"
                onClick={() => navigate("/main/exercises")}
              >
                Browse Exercises
              </Button>
            </div>

            {/* Animated stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-in-left animation-delay-400">
              <div className="text-center pulse-big">
                <div className="text-4xl font-black cyber-glow mb-2">50+</div>
                <div className="text-sm text-white/80 font-semibold">
                  Exercises
                </div>
              </div>
              <div className="text-center pulse-big animation-delay-100">
                <div className="text-4xl font-black cyber-glow mb-2">24/7</div>
                <div className="text-sm text-white/80 font-semibold">
                  Support
                </div>
              </div>
              <div className="text-center pulse-big animation-delay-200">
                <div className="text-4xl font-black cyber-glow mb-2">100%</div>
                <div className="text-sm text-white/80 font-semibold">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with 3D cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Why Choose <span className="gradient-text">Physio Aid</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the future of physiotherapy with our cutting-edge
              platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card-3d card-elevated p-8 hover-glow-teal animate-fade-in-up magnetic"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="tilt-3d">
                    <div className="tilt-3d-inner">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto wobble">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Our <span className="rainbow-text">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive care across multiple therapy areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={index}
                  className="group card-elevated p-8 hover-glow-teal magnetic animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-16 h-16 ${specialty.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 bounce-rotate`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section with timeline */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with Physio Aid in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="card-elevated p-8 text-center hover-glow-teal animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center pulse-big">
                    <span className="text-3xl font-black text-white cyber-glow">
                      {item.step}
                    </span>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-12 w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 animated-gradient text-white relative overflow-hidden">
        {/* More particles */}
        {particles.slice(0, 10).map((particle) => (
          <div
            key={`cta-${particle.id}`}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 cyber-glow animate-pulse-big">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-2xl mb-12 text-white/90">
              Join thousands who are taking control of their health
            </p>

            <Button
              size="lg"
              className="bg-white cursor-pointer text-teal-600 hover:bg-teal-50 px-12 py-8 text-2xl font-black shadow-2xl ripple-effect neon-border transform hover:scale-110 transition-all duration-300"
              onClick={() =>
                navigate(isAuthenticated ? "/dashboard" : "/auth/register")
              }
            >
              <Sparkles className="w-7 h-7 mr-3 wobble" />
              {isAuthenticated ? "Launch Dashboard" : "Start FREE Today"}
              <ArrowRight className="w-7 h-7 ml-3" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
