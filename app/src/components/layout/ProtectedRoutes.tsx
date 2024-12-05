import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const User = useSelector((state) => state.auth);
  return User.user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoutes;
