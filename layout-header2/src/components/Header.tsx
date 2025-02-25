import { useState } from "react";
import { ChevronDown, LogOut, Settings, User, Bell, HelpCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setDropdownOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      {/* Left: Logo + Mobile Menu Button */}
      <div className="flex items-center gap-3">
        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
        <div className="text-2xl font-bold tracking-wide">🚀 MyBrand</div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-lg font-medium">
        <a href="#" className="hover:text-gray-300 transition">
          Home
        </a>
        <a href="#" className="hover:text-gray-300 transition">
          About
        </a>
        <a href="#" className="hover:text-gray-300 transition">
          Services
        </a>
        <a href="#" className="hover:text-gray-300 transition">
          Contact
        </a>
      </nav>

      {/* Right Side - Profile/Login */}
      <div className="w-40 flex justify-end items-center">
        {isLoggedIn ? (
          <div className="relative">
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition duration-300" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className="font-semibold">John Doe</span>
              <ChevronDown className="w-5 h-5" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in">
                <ul className="py-2">
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
                    <User className="w-5 h-5" />
                    Profile
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
                    <Bell className="w-5 h-5" />
                    Notifications
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
                    <Settings className="w-5 h-5" />
                    Settings
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
                    <HelpCircle className="w-5 h-5" />
                    Help & Support
                  </li>
                  <hr className="border-gray-300 my-2" />
                  <li
                    className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer transition"
                    onClick={handleAuthToggle}
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition duration-300" onClick={handleAuthToggle}>
            <span className="font-semibold">Login</span>
          </button>
        )}
      </div>

      {/* Mobile Menu - Slide-in Drawer (without overlay) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-xl font-bold text-white">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8 text-white" />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4 text-lg font-medium">
          <a href="#" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
