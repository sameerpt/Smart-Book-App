'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br py-10  from-green-50 via-green-50 to-green-50 flex items-center justify-center  sm:px-6 overflow-hidden relative">

      <motion.div
        className="absolute top-10 left-0 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-10 right-0 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Organize Your
            <span className="block bg-linear-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Favorite Bookmarks
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-mono text-gray-600 max-w-xl mx-auto lg:mx-0">
            Save, organize, and access your important links from anywhere. Simple and powerful.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link href="/login">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-linear-to-r from-green-600 to-green-600 text-white rounded-full font-bold"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                Login To Start
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-md mx-auto w-full"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/60 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-2xl"
          >
            <div className="bg-linear-to-br from-green-50 to-green-50 rounded-2xl p-4 sm:p-6 space-y-3">

              <motion.div
                className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-xl sm:text-2xl">
                  🎨
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono font-bold text-gray-900/80 truncate">
                    Design Inspiration
                  </div>
                  <div className="text-sm text-gray-700 font-mono truncate">
                    Dribbble.com
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 shadow-md"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <a href="https://sameerpt.in" className="flex gap-3 items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-xl sm:text-2xl">
                    📚
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono font-bold text-gray-900/80 truncate">
                      My Portfolio
                    </div>
                    <div className="text-sm text-gray-700 font-mono truncate">
                      sameerpt.in
                    </div>
                  </div>
                </a>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 shadow-md"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <a href="https://github.com/sameerpt" className="flex gap-3 items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-xl sm:text-2xl">
                    💼
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono font-bold text-gray-900/80 truncate">
                      Work Projects
                    </div>
                    <div className="text-sm text-gray-700 font-mono truncate">
                      github.com
                    </div>
                  </div>
                </a>
              </motion.div>

              <div className="pt-3 grid grid-cols-2 gap-3">
                <div className="bg-linear-to-r from-green-500 to-green-700 rounded-xl p-4 text-white">
                  <div className="text-xl sm:text-2xl font-mono font-bold">24</div>
                  <div className="text-sm opacity-90">Saved Links</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-gray-900/80">5</div>
                  <div className="text-sm text-gray-600">Titles</div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
