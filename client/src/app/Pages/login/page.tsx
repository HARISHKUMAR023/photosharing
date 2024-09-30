"use client"; // Indicate this is a Client Component

import Image from "next/image";
import Particles from 'client/src/app/Particles/Particles';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    console.log('navigating to /dashboard');
    router.push('/Pages/dashboard'); // Navigate to the dashboard
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Particles className="absolute inset-0 z-0" />
      <div id='parentDiv' className="relative z-10 w-full max-w-md overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/50 h-[450px]">

        <AnimatePresence>
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{
                duration: 1, // Duration for animate state
                ease: "easeInOut", // Optional easing
                when: "beforeChildren",

              }}
              className="relative z-10 p-6  shadow-lg h-full"
            >
              <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Login</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                  <input className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-6">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="password">Password</label>
                  <input className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" id="password" type="password" placeholder="Enter your password" required />
                </div>
                <div className="flex items-center justify-between relative">
                  <button 
                    className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded w-full" 
                    type="button" 
                    onClick={handleLogin}>
                    Log In
                  </button>
                </div>
              </form>
              <p className="mt-4 text-text-secondary text-center">
                Don't have an account? <button onClick={handleToggle} className="text-primary">Sign up</button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: 500, opacity: 0 }} // Starting position and opacity
              animate={{ x: 0, opacity: 1 }}   // Final position and opacity
              exit={{ x: 500, opacity: 0 }}    // Transition on exit
              transition={{
                duration: 1, // Duration for animate state
                ease: "easeInOut", // Optional easing
                when: "beforeChildren", // Optional: manage children transition
              }}
              className="relative z-10 p-6 sm shadow-lg h-full "
            >
              <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Sign Up</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="signup-email">Email Address</label>
                  <input className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" id="signup-email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="username">Username</label>
                  <input className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" id="username" type="text" placeholder="Choose a username" required />
                </div>
                <div className="mb-6">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="signup-password">Password</label>
                  <input className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" id="signup-password" type="password" placeholder="Create a password" required />
                </div>
                <div className="flex items-center justify-between relative">
                  <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded w-full" type="button" onClick={handleToggle}>
                    Already have an account? Log in
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
