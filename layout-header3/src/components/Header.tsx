import { useState, useEffect } from "react";
import { ChevronDown, LogOut, Settings, User, Bell, Menu, X, Circle } from "lucide-react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-lg">
      {/* Left Side - Logo & Mobile Menu */}
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-7 h-7 hover:scale-110 transition-transform duration-200" />
        </button>
        <div className="text-2xl font-bold">🚀 MyBrand</div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-lg font-medium items-center">
        <a href="#" className="hover:text-gray-300 transition">
          Home
        </a>
        <a href="#" className="hover:text-gray-300 transition">
          About
        </a>

        {/* Services Dropdown */}
        <div className="relative dropdown">
          <button
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition"
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          >
            <span className="font-semibold">Services</span>
            <ChevronDown className="w-5 h-5 transition-transform duration-300" style={{ transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0)" }} />
          </button>

          {servicesDropdownOpen && (
            <div className="absolute left-0 mt-3 w-56 bg-white text-gray-800 rounded-lg shadow-lg animate-fade-in">
              <ul className="py-3 text-sm font-medium">
                <li className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition">
                  <Circle className="w-3 h-3 mr-2 text-gray-500" />
                  Web Development
                </li>
                <li className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition">
                  <Circle className="w-3 h-3 mr-2 text-gray-500" />
                  App Development
                </li>
                <li className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition">
                  <Circle className="w-3 h-3 mr-2 text-gray-500" />
                  SEO Optimization
                </li>
                <li className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition">
                  <Circle className="w-3 h-3 mr-2 text-gray-500" />
                  Digital Marketing
                </li>
              </ul>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-gray-300 transition">
          Contact
        </a>
      </nav>

      {/* Profile / Login */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
              <div className="text-xl font-bold">🚀 MyBrand</div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex flex-col text-lg font-medium p-4">
              <a href="#" className="py-3 hover:text-gray-300 transition">
                Home
              </a>
              <a href="#" className="py-3 hover:text-gray-300 transition">
                About
              </a>

              {/* Services Dropdown - Mobile */}
              <button
                className="flex justify-between items-center py-3 hover:text-gray-300 transition w-full"
                onClick={() => setMobileServicesDropdownOpen(!mobileServicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${mobileServicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesDropdownOpen && (
                <div className="pl-6 mt-2 space-y-3 animate-fade-in flex flex-col">
                  <a href="#" className="py-2 text-sm hover:text-gray-300 flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-gray-500" />
                    Web Development
                  </a>
                  <a href="#" className="py-2 text-sm hover:text-gray-300 flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-gray-500" />
                    App Development
                  </a>
                  <a href="#" className="py-2 text-sm hover:text-gray-300 flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-gray-500" />
                    SEO Optimization
                  </a>
                  <a href="#" className="py-2 text-sm hover:text-gray-300 flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-gray-500" />
                    Digital Marketing
                  </a>
                </div>
              )}

              <a href="#" className="py-3 hover:text-gray-300 transition">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
