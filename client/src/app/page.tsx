import Image from "next/image";
import login from "./img/image-viewer-animate.svg";
export default function Home() {
  return (
    <div className="relative bg-background-light min-h-screen flex items-center justify-center">
    {/* Background Illustration */}
    <div className="absolute inset-0">
      <Image 
        src={login} 
        alt="Illustration"
        className="w-full h-full object-cover opacity-20"
      />
    </div>

    {/* Login Form */}
    <div className="relative z-10 w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-text-primary focus:outline-none focus:border-primary"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded w-full"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
      <p className="mt-4 text-text-secondary text-center">
        Dont have an account? <a href="/signup" className="text-primary">Sign up</a>
      </p>
    </div>
  </div>
  );
}
