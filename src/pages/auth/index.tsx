import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import AuthModal from "@/components/Modals/AuthModal";
// type AuthPageProps = {};

const AuthPage: React.FC = () => {
  return <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
    <div className="max-w-7xl mx-auto">
        <Navbar />
        <AuthModal />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
            <img src="/hero.png" alt="Hero img" />
        </div>
    </div>
  </div>;
};
export default AuthPage;
