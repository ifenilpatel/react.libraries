import { useState } from "react";
import { ChevronDown, LogOut, Settings, User, Bell, HelpCircle } from "lucide-react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setDropdownOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="text-2xl font-bold tracking-wide">🚀 MyBrand</div>

      <div className="w-40 flex justify-end items-center">
        {isLoggedIn ? (
          <div className="relative">
            <button
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="font-semibold">John Doe</span>
              <ChevronDown className="w-5 h-5" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in">
                <ul className="py-2">
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer transition">
                    <User className="w-5 h-5" />
                    Profile
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer transition">
                    <Bell className="w-5 h-5" />
                    Notifications
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer transition">
                    <Settings className="w-5 h-5" />
                    Settings
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer transition">
                    <HelpCircle className="w-5 h-5" />
                    Help & Support
                  </li>
                  <hr className="border-gray-300 my-2" />
                  <li className="flex items-center gap-2 px-4 py-2  hover:bg-red-200  cursor-pointer transition" onClick={handleAuthToggle}>
                    <LogOut className="w-5 h-5" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer" onClick={handleAuthToggle}>
            <span className="font-semibold">Login</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
