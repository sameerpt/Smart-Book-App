'use client';

import { motion } from 'framer-motion';
import { supabaseClient } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function LoginPage() {

    const loginWithGoogle = async () => {
        await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="min-h-screen flex overflow-hidden relative">
            <motion.div
                className="absolute inset-0 bg-linear-to-br from-green-50 via-white to-green-50"
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 relative">

                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute top-10 left-10 flex items-center gap-3"
                >
                    <Link href='/' className='flex gap-2 items-center cursor-pointer'>
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold">
                            ☁️
                        </div>
                        <span className="font-mono font-bold text-xl text-gray-900">
                            CloudLink
                        </span>
                    </Link>
                </motion.div>

                <motion.div
                    className="absolute top-10 left-10 w-72 h-72 bg-green-300/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="max-w-md w-full text-center relative z-10 ">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-black text-gray-900 mb-10"
                    >
                        Welcome to
                        <span className="block bg-linear-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                            CloudLink
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mb-4 font-mono"
                    >
                        Your bookmarks. Organized beautifully.
                    </motion.p>

                    <motion.button
                        onClick={loginWithGoogle}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-full font-mono font-semibold text-gray-700 hover:bg-white/30 transition-all"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </motion.button>

                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex w-1/2 items-center bg-linear-to-r from-green-50 border-l border-l-gray-200  to-green-100 justify-center px-12 relative"
            >
                <div className="max-w-lg space-y-8">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-black bg-linear-to-r from-green-600  to-green-800 bg-clip-text text-transparent"
                    >
                        Save Smarter.
                        <br />
                        <span className='text-gray-900'>Find Faster.</span>
                    </motion.h2>

                    <p className="text-lg text-gray-600 font-mono">
                        CloudLink keeps your important links organized,
                        synced, and always within reach.
                    </p>

                    {["⚡ Instant save", "☁️ Cloud sync", "🔒 Secure access"].map((t, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                            className="bg-white rounded-xl px-6 py-4 font-mono border-gray-200 border font-semibold"
                        >
                            {t}
                        </motion.div>
                    ))}

                </div>
            </motion.div>

        </div>
    );
}
