import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-white text-gray-800">
      <AnimatePresence>
        {showSplash ? (
          <motion.div
            key="splash"
            className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* App Name Only */}
            <motion.h1
              className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-100 to-white animate-pulse drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)] tracking-wide"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              QA Skills
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <HeroSection />

            {/* Features Section */}
            <section className="py-20 px-6 bg-blue-50 text-center">
              <motion.h2
                className="text-3xl font-bold mb-10 text-blue-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Why Choose QA Skills?
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {[
                  {
                    title: "Assignments",
                    icon: "📝",
                    desc: "Easily upload, track, and organize your classwork.",
                  },
                  {
                    title: "Exam Reports",
                    icon: "📊",
                    desc: "Visualize performance with intuitive test analytics.",
                  },
                  {
                    title: "Attendance",
                    icon: "📅",
                    desc: "Monitor attendance trends with calendar insights.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-blue-800">{feature.title}</h3>
                    <p className="text-gray-600 mt-2">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center relative overflow-hidden">
              <motion.h2
                className="text-4xl font-extrabold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Ready to boost your learning?
              </motion.h2>
              <p className="mb-6 text-lg">
                Join now and transform your academic journey with QA Skills.
              </p>
              <a
                href="/signup"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
              >
                Sign Up Now
              </a>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center bg-blue-800 text-white">
              <p>&copy; {new Date().getFullYear()} QA Skills. Built with ❤️ for students.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
