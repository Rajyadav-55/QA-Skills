import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-illustration.svg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-indigo-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
            Unlock Smarter Learning with{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-transparent bg-clip-text inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              QA Skills
            </motion.span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            From assignments and performance analytics to notes and schedules — everything you need to excel, all in one place.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition"
            >
              Already a User?
            </Link>
          </div>
        </motion.div>

        {/* Hero Image with slow continuous rotation */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.img
            src={heroImage}
            alt="QA Skills Dashboard Illustration"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20 // Slower rotation
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
