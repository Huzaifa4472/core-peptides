import { BrowserRouter as Router, Routes, Route,Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./user/components/Header";
import Footer from "./user/components/Footer";
import userRoutes from "./routes/UserRoute";
import adminRoutes from "./routes/AdminRoute";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
 function LayoutWrapper({ children }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/user" replace />} />
          <Route path="/user/*" element={<UserWrapper />} />
          <Route path="/admin/*" element={<AdminWrapper />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

function UserWrapper() {
  return <Routes>{userRoutes}</Routes>;
}

function AdminWrapper() {
  return <Routes>{adminRoutes}</Routes>;
}

export default App;
