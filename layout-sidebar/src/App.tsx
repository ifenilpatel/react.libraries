import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Services from "./pages/Services";
import WebDevelopment from "./pages/services/WebDevelopment";
import SEO from "./pages/services/SEO";
import Marketing from "./pages/services/Marketing";
import Electronics from "./pages/products/Electronics";
import Fashion from "./pages/products/Fashion";
import HomeAppliances from "./pages/products/HomeAppliances";
import SalesReport from "./pages/reports/SalesReport";
import UserReport from "./pages/reports/UserReport";
import HelpCenter from "./pages/support/HelpCenter";
import ContactSupport from "./pages/support/ContactSupport";
import { useEffect, useState } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <div className="flex flex-1">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <main className="flex-1 p-6 bg-gray-100 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />

              {/* Services */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/seo" element={<SEO />} />
              <Route path="/services/marketing" element={<Marketing />} />

              {/* Products */}
              <Route path="/products/electronics" element={<Electronics />} />
              <Route path="/products/fashion" element={<Fashion />} />
              <Route path="/products/home-appliances" element={<HomeAppliances />} />

              {/* Reports */}
              <Route path="/reports/sales" element={<SalesReport />} />
              <Route path="/reports/users" element={<UserReport />} />

              {/* Support */}
              <Route path="/support/help-center" element={<HelpCenter />} />
              <Route path="/support/contact-support" element={<ContactSupport />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
