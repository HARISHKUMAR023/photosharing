"use client"; // Indicate this is a Client Component

import Image from "next/image";
import Particles from 'client/src/app/Particles/Particles';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginPhotographer, registerPhotographer } from 'client/src/services/authService'; // Import auth services
import { motion, AnimatePresence } from 'framer-motion';

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // For signup

  // Login Handler
  const handleLogin = async () => {
    try {
      const result = await loginPhotographer(email, password);
      console.log("Login successful:", result);
      router.push('/Pages/dashboard'); // Navigate to the dashboard
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
      } else {
        console.error("Unknown error occurred during login.");
      }
    }
  };

  // Signup Handler
  const handleSignup = async () => {
    try {
      const result = await registerPhotographer(email, username, password);
      console.log("Signup successful:", result);
      setIsLogin(true); // Switch to login screen after signup
    } catch (error) {
      if (error instanceof Error) {
        console.error("Signup error:", error.message);
      } else {
        console.error("Unknown error occurred during signup.");
      }
    }
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
                duration: 1,
                ease: "easeInOut",
                when: "beforeChildren",
              }}
              className="relative z-10 p-6  shadow-lg h-full"
            >
              <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Login</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                  <input 
                    className="appearance-none bg-white/5 text-white border-b border-secondary/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="password">Password</label>
                  <input 
                    className="appearance-none bg-white/5 text-white border-b border-secondary/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="flex items-center justify-between relative">
                  <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded w-full" type="button" onClick={handleLogin}>
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
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                when: "beforeChildren",
              }}
              className="relative z-10 p-6 sm shadow-lg h-full "
            >
              <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Sign Up</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="signup-email">Email Address</label>
                  <input 
                    className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" 
                    id="signup-email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="username">Username</label>
                  <input 
                    className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" 
                    id="username" 
                    type="text" 
                    placeholder="Choose a username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="signup-password">Password</label>
                  <input 
                    className="appearance-none bg-white/5 text-white border-b border-white/50 rounded-t w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary" 
                    id="signup-password" 
                    type="password" 
                    placeholder="Create a password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="flex items-center justify-between relative">
                  <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded w-full" type="button" onClick={handleSignup}>
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="mt-4 text-text-secondary text-center">
                Already have an account? <button onClick={handleToggle} className="text-primary">Log in</button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
