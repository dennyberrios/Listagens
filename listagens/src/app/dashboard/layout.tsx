'use client';

import { useState } from 'react';

type DashboardLayoutProps = {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Mobile Hamburger Menu Button */}
            <div className="lg:hidden p-4 bg-gray-800 text-white flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>
            {/* Sidebar for Desktop */}
            <div className={`lg:w-64 bg-midnightGray text-white p-4 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                <h2 className={`text-2xl font-bold mb-8`}>Dashboard</h2>
                <ul>
                    <li className="mb-4">
                        <a href="/dashboard/home" className="hover:text-emerald-400">Home</a>
                    </li>
                    <li className="mb-4">
                        <a href="/dashboard/analytics" className="hover:text-emerald-400">Analytics</a>
                    </li>
                    <li className="mb-4">
                        <a href="/dashboard/settings" className="hover:text-emerald-400">Settings</a>
                    </li>
                    <li className="mb-4">
                        <a href="/dashboard/profile" className="hover:text-emerald-400">Profile</a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-emerald-400">Logout</a>
                    </li>
                </ul>
            </div>


            {/* Main Content Area */}
            <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                {/* Render children content here */}
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
