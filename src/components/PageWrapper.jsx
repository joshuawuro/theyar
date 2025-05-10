import { useEffect, useState } from "react";
import Loader from "./Loader";

function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // delay before showing content
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      {loading ? <Loader /> : children}
    </div>
  );
}

export default PageWrapper;
