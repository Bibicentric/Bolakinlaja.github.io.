import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";

const programs = [
  {
    name: "DARTT Lab",
    desc: "Hands-on fintech lab for real-world data analysis and trading.",
    image: "/hero-dartt.jpg",
  },
  {
    name: "Data Tribe",
    desc: "Community-driven program fostering data literacy and peer learning.",
    image: "/hero-tribe.jpg",
  },
  {
    name: "Mentorship Program",
    desc: "Pairing students with industry leaders for growth and guidance.",
    image: "/hero-mentorship.jpg",
  },
  {
    name: "AI & Analytics Training",
    desc: "Immersive workshops on AI, machine learning, and analytics tools.",
    image: "/hero-ai.jpg",
  },
];

const impactStats = [
  { label: "Students Trained", value: 300, suffix: "+" },
  { label: "Funding Secured", value: 350, prefix: "$", suffix: "K" },
  { label: "Industry Partnerships", value: 10, suffix: "+" },
];

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"} style={{ transition: "background 0.5s" }}>
      {/* NAVBAR */}
      <nav className="fixed w-full z-20 top-0 left-0 bg-opacity-70 backdrop-blur shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <span className="font-bold text-2xl tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-600 to-white bg-clip-text text-transparent">CDA</span>
          </span>
          <div className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#programs" className="hover:text-yellow-400 transition-colors">Programs</a>
            <a href="#impact" className="hover:text-yellow-400 transition-colors">Impact</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="ml-3 p-2 rounded-full bg-white/10 hover:bg-yellow-400/10 transition"
          >
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: dark
            ? "radial-gradient(circle at 50% 0%, #1a2332 60%, #060606 100%)"
            : "radial-gradient(circle at 50% 0%, #fff 60%, #e5e7eb 100%)",
        }}
      >
        {/* Futuristic visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <img
            src="/hero-visual.png"
            alt=""
            className="w-[420px] h-[320px] object-cover rounded-3xl shadow-2xl opacity-60 blur-sm"
            style={{ filter: "drop-shadow(0 0 50px #ffd70088)" }}
          />
        </motion.div>
        <div className="z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-5"
          >
            <span className="block bg-gradient-to-r from-yellow-400 via-blue-500 to-white bg-clip-text text-transparent animate-gradient">
              <Typewriter
                options={{
                  strings: [
                    "Data. Innovation. Impact.",
                    "Shaping Tomorrow's Leaders.",
                    "Empowering Change Through Analytics.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 50,
                }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-xl mx-auto text-lg md:text-2xl font-light mb-8"
          >
            Where technology meets leadership. Experience bold transformation at the Center for Data Analytics.
          </motion.p>
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.06, boxShadow: "0 0 18px #ffd700" }}
            className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-yellow-400 via-blue-600 to-white shadow-lg hover:shadow-yellow-400/80 focus:outline-none border-0 transition-all duration-300"
            style={{
              color: dark ? "#23231a" : "#fff",
              textShadow: "0 2px 10px #0003",
            }}
          >
            Explore Programs
          </motion.a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 py-24 px-6">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="/about-visual.jpg"
            alt="Center for Data Analytics"
            className="rounded-3xl shadow-2xl border-4 border-blue-900/20"
            style={{ filter: "brightness(1.05) drop-shadow(0 0 16px #ffd70088)" }}
          />
        </motion.div>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-blue-600 to-white bg-clip-text text-transparent">
            About CDA
          </h2>
          <p className="text-lg font-light mb-6">
            The Center for Data Analytics is dedicated to advancing education, research, and workforce development in AI, data science, and analytics. Our mission is to foster inclusive innovation and empower future-ready leaders through impactful programs and partnerships.
          </p>
          <div className="flex gap-4">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-900/10 text-blue-900 font-semibold mr-2">Tech Leadership</span>
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-700 font-semibold">Data Innovation</span>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-24 px-6 bg-gradient-to-b from-black via-blue-950/80 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-blue-600 to-white bg-clip-text text-transparent">
            Programs & Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((prog, idx) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 border border-blue-700/30 rounded-2xl shadow-xl p-8 flex flex-col items-start glass-card relative overflow-hidden hover:-translate-y-2 hover:shadow-yellow-400/30 transition-all duration-300"
                style={{
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 24px #ffd70044, 0 1.5px 8px #00224a44",
                }}
              >
                <img
                  src={prog.image}
                  alt={prog.name}
                  className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-yellow-400/70"
                />
                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{prog.name}</h3>
                <p className="text-base font-light mb-2">{prog.desc}</p>
                <span className="absolute bottom-0 right-0 m-4 opacity-20 text-6xl">
                  <SiFramer />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section id="impact" className="py-24 px-6 bg-gradient-to-b from-black via-yellow-900/20 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-blue-600 to-white bg-clip-text text-transparent">
            Impact
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl border border-yellow-400/30 bg-white/10 shadow-lg glass-card"
                style={{
                  boxShadow: "0 2px 24px #ffd70022, 0 1.5px 8px #00224a22",
                  backdropFilter: "blur(8px)",
                  minWidth: 220,
                }}
              >
                <div className="text-5xl font-extrabold mb-2 text-yellow-400 drop-shadow-xl">
                  {stat.prefix || ""}
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce suffix={stat.suffix || ""} />
                </div>
                <div className="text-lg font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto bg-white/10 rounded-3xl shadow-2xl glass-card p-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-blue-600 to-white bg-clip-text text-transparent">
            Contact Us
          </h2>
          <form className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                required
                placeholder=" "
                className="peer w-full p-4 bg-transparent border-b-2 border-yellow-400 focus:outline-none text-lg placeholder-transparent"
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-yellow-400 peer-focus:text-xs">Your Name</label>
            </div>
            <div className="relative">
              <input
                type="email"
                required
                placeholder=" "
                className="peer w-full p-4 bg-transparent border-b-2 border-yellow-400 focus:outline-none text-lg placeholder-transparent"
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-yellow-400 peer-focus:text-xs">Your Email</label>
            </div>
            <div className="relative">
              <textarea
                required
                placeholder=" "
                className="peer w-full p-4 bg-transparent border-b-2 border-yellow-400 focus:outline-none text-lg min-h-[100px] placeholder-transparent"
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-yellow-400 peer-focus:text-xs">Your Message</label>
            </div>
            <button
              type="submit"
              className="mt-4 px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-yellow-400 via-blue-600 to-white shadow-lg glow-btn hover:shadow-yellow-400/80 focus:outline-none border-0 transition-all duration-300"
              style={{ color: "#23231a", textShadow: "0 2px 10px #0002" }}
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex flex-col items-center gap-2 text-base text-white/80">
            <div>
              <FaEnvelope className="inline mr-2 text-yellow-400" />
              <a href="mailto:info@cda.edu" className="hover:text-yellow-400 transition">info@cda.edu</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 py-8 text-center border-t border-yellow-400/20 bg-gradient-to-r from-black via-blue-900/30 to-black">
        <div className="flex items-center justify-center gap-6 mb-2">
          <a href="https://linkedin.com" className="hover:text-yellow-400 transition-all text-2xl"><FaLinkedin /></a>
          <a href="https://github.com" className="hover:text-yellow-400 transition-all text-2xl"><FaGithub /></a>
        </div>
        <div className="text-white/70 text-lg">
          &copy; {new Date().getFullYear()} Center for Data Analytics. Designed with <span className="text-yellow-400">AI</span> & <span className="text-blue-400">innovation</span>.
        </div>
      </footer>

      {/* Glow/Glass styles */}
      <style>{`
        .glass-card {
          background: rgba(30, 30, 40, 0.35);
          border-radius: 1.5rem;
          box-shadow: 0 12px 40px #00224a33, 0 2px 8px #ffd70033;
          backdrop-filter: blur(14px);
        }
        .glow-btn:hover, .glow-btn:focus {
          box-shadow: 0 0 22px #ffd70088, 0 0 44px #1e40af22;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 4s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}