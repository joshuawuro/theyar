import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "../components/Loader";

function AppLayout() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    setLoading(true); // Show loader when route changes
    const timer = setTimeout(() => setLoading(false), 3000); // Simulated load time
    return () => clearTimeout(timer);
  }, [location]); // Runs effect whenever the route changes

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
