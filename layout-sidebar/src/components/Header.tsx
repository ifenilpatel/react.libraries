import { useState, useEffect } from "react";
import { ChevronDown, LogOut, Settings, User, Bell, Menu } from "lucide-react";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement)?.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white shadow-lg">
      {/* Left Side - Logo & Toggle Button */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-white p-2 hover:bg-gray-700 rounded-md">
          <Menu className="w-6 h-6" />
        </button>
        <div className="text-2xl font-bold">🚀 MyBrand</div>
      </div>

      {/* Right Side - Profile / Login */}
      <div className="flex items-center justify-end w-40">
        {isLoggedIn ? (
          <div className="relative dropdown">
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition duration-300" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className="font-semibold">John Doe</span>
              <ChevronDown className="w-5 h-5" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-lg animate-fade-in">
                <ul className="py-2 text-sm font-medium">
                  <li className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer transition">
                    <User className="w-5 h-5" />
                    Profile
                  </li>
                  <li className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer transition">
                    <Bell className="w-5 h-5" />
                    Notifications
                  </li>
                  <li className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer transition">
                    <Settings className="w-5 h-5" />
                    Settings
                  </li>
                  <hr className="border-gray-300 my-2" />
                  <li
                    className="flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer transition"
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
    </header>
  );
};

export default Header;
