// import { useAuth0 } from "@auth0/auth0-react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth0();

//   return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />; // here outlet is the child of the route that is going to be rendered; see the AppRoutes folder
// };

// export default ProtectedRoute;

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
