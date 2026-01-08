"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-32"
    >
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-sm text-cyan-400 mb-4">
          Hi, I’m David 👋
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          I build reliable and maintainable
          <br />
          web applications with modern JavaScript.
        </h1>

        <p className="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          I’m a Computer Science graduate focused on building
          clean, maintainable applications.
          <br />
          I work primarily with React, Next.js, and modern backend tools.
        </p>

        <div className="flex gap-8">
          <motion.a
            href="#projects"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-sm font-medium text-neutral-200 hover:text-cyan-400 transition underline-offset-4 hover:underline"
          >
            View projects →
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-sm font-medium text-neutral-200 hover:text-cyan-400 transition underline-offset-4 hover:underline"
          >
            Get in touch
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
