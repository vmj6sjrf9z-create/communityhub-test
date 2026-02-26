import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();

  // 🔥 if user is undefined, session is still restoring
  if (user === undefined) return <div>Loading...</div>;

  if (!user) return <Navigate to="/signup" replace />;
  return children;
}
