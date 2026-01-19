import { useState } from "react";
import axios from "axios";
import Otp from "./otp";
import History from "./history";

export default function Login() {
  const [email, setE] = useState("");
  const [password, setP] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [ok, setOk] = useState(false);

  const login = async () => {
    try {
      console.log("Login button clicked");

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Backend response:", res.data);

      if (res.data.otp) {
        setShowOtp(true); 
      } else {
        setOk(true); 
      }
    } catch (err) {
      console.error("Login failed");

      if (err.response) {
        console.error("Status:", err.response.status);
        console.error("Data:", err.response.data);
      } else {
        console.error("Error message:", err.message);
      }
    }
  };

  
  if (showOtp) {
    return <Otp email={email} onSuccess={() => setOk(true)} />;
  }

  if (ok) {
    return <History email={email} />;
  }

  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setE(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setP(e.target.value)}
        />

        <button type="button" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}