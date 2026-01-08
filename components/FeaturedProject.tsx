"use client";

import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <motion.div
        className="max-w-5xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold mb-12">
          Featured project
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-medium mb-3">
              Language Learning Application
            </h3>

            <p className="text-neutral-400 max-w-xl">
              A full-stack web application designed to help users learn new
              languages through structured lessons, quizzes, and practice.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-neutral-300">
              The problem
            </h4>
            <p className="text-neutral-400 max-w-xl">
              Many language learning tools feel overwhelming or fail to track
              long-term progress effectively. I wanted to build something that
              was simple to use while still supporting structured learning over
              time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-neutral-300">
              The solution
            </h4>
            <ul className="space-y-2 text-neutral-400 max-w-xl">
              <li>• Designed lesson, quiz, and flashcard flows</li>
              <li>• Implemented user authentication and progress tracking</li>
              <li>• Persisted learning data to allow users to return over time</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-neutral-300">
              Challenges & learning
            </h4>
            <p className="text-neutral-400 max-w-xl">
              The most challenging part was coordinating frontend state with
              backend persistence, especially when tracking user progress
              across different learning activities.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-neutral-300">
              What I would improve next
            </h4>
            <p className="text-neutral-400 max-w-xl">
              Given more time, I would improve the learning algorithm by
              introducing spaced repetition and deeper progress analytics.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>MongoDB</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
