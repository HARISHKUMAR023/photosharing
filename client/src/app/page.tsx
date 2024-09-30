"use client"; // Indicate this is a Client Component

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push('/Pages/login'); // Navigate to the login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleGoToLogin}
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded"
      >
        Go to Login Page
      </button>
    </div>
  );
}
