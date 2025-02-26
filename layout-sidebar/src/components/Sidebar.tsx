import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Settings, Briefcase, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const location = useLocation();
  const [dropdowns, setDropdowns] = useState({
    services: false,
    products: false,
    reports: false,
    support: false,
  });

  // Check if any submenu is active
  const isServiceActive = location.pathname.startsWith("/services");
  const isProductActive = location.pathname.startsWith("/products");
  const isReportActive = location.pathname.startsWith("/reports");
  const isSupportActive = location.pathname.startsWith("/support");

  // Auto-close dropdown when navigating away
  useEffect(() => {
    setDropdowns({
      services: isServiceActive,
      products: isProductActive,
      reports: isReportActive,
      support: isSupportActive,
    });
  }, [location.pathname]);

  return (
    <div
      className={`bg-gray-900 text-white h-[calc(100vh-64px)] overflow-y-auto  transition-all duration-300 ease-in-out 
      ${isSidebarOpen ? "w-64" : "w-0"} 
      md:relative fixed left-0 z-50 md:z-auto shadow-lg md:shadow-none`}
    >
      <nav className="mt-4 pb-16">
        {/* Dashboard */}
        <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}>
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>

        {/* Users */}
        <NavLink to="/users" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}>
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Users</span>
        </NavLink>

        {/* Settings */}
        <NavLink to="/settings" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}>
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </NavLink>

        {/* Services Dropdown */}
        <div>
          <button
            onClick={() => setDropdowns((prev) => ({ ...prev, services: !prev.services }))}
            className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">Services</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${dropdowns.services ? "rotate-180" : ""}`} />
          </button>

          {/* Services Submenu */}
          {(dropdowns.services || isServiceActive) && (
            <div className="ml-10 border-l border-gray-600">
              <NavLink
                to="/services/web-development"
                className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}
              >
                Web Development
              </NavLink>
              <NavLink to="/services/seo" className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}>
                SEO Optimization
              </NavLink>
              <NavLink
                to="/services/marketing"
                className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}
              >
                Marketing
              </NavLink>
            </div>
          )}
        </div>

        {/* Products Dropdown */}
        <div>
          <button
            onClick={() => setDropdowns((prev) => ({ ...prev, products: !prev.products }))}
            className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">Products</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${dropdowns.products ? "rotate-180" : ""}`} />
          </button>

          {/* Products Submenu */}
          {(dropdowns.products || isProductActive) && (
            <div className="ml-10 border-l border-gray-600">
              <NavLink
                to="/products/electronics"
                className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}
              >
                Electronics
              </NavLink>
              <NavLink
                to="/products/fashion"
                className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}
              >
                Fashion
              </NavLink>
              <NavLink
                to="/products/home-appliances"
                className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}
              >
                Home Appliances
              </NavLink>
            </div>
          )}
        </div>

        {/* Reports Dropdown */}
        <div>
          <button
            onClick={() => setDropdowns((prev) => ({ ...prev, reports: !prev.reports }))}
            className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">Reports</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${dropdowns.reports ? "rotate-180" : ""}`} />
          </button>

          {/* Reports Submenu */}
          {(dropdowns.reports || isReportActive) && (
            <div className="ml-10 border-l border-gray-600">
              <NavLink to="/reports/sales" className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}>
                Sales
              </NavLink>
              <NavLink to="/reports/users" className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}>
                Users
              </NavLink>
            </div>
          )}
        </div>

        {/* Support Dropdown */}
        <div>
          <button
            onClick={() => setDropdowns((prev) => ({ ...prev, support: !prev.support }))}
            className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">Support</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${dropdowns.support ? "rotate-180" : ""}`} />
          </button>

          {/* Support Submenu */}
          {(dropdowns.support || isSupportActive) && (
            <div className="ml-10 border-l border-gray-600">
              <NavLink
                to="/support/help-center"
                className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}
              >
                Help Center
              </NavLink>
              <NavLink
                to="/support/contact-support"
                className={({ isActive }) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`}
              >
                Contact Support
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
