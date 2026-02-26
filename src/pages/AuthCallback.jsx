import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Let UserProvider restore the session,
    // then ProtectedRoute will handle access
    navigate("/home", { replace: true });
  }, [navigate]);

  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
      <p>Logging you in...</p>
    </div>
  );
}
