import { useState } from "react";
import axios from "axios";
import History from "./history";

export default ({ email }) => {
  const [otp, setOtp] = useState("");
  const [done, setDone] = useState(false);

  const submit = async () => {
    await axios.post("http://localhost:5000/api/otp", { email, otp });
    setDone(true);
  };

return done ? (
  <History email={email} />
) : (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
      
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        OTP Verification
      </h2>
      <p className="text-sm text-center text-gray-500 mt-1">
        Enter the 6-digit OTP sent to your email
      </p>

      <input
        type="text"
        maxLength="6"
        inputMode="numeric"
        placeholder="••••••"
        onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
        className="mt-6 w-full px-4 py-3 text-center text-xl tracking-widest
                   border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={submit}
        disabled={otp.length !== 6}
        className={`mt-6 w-full py-3 rounded-lg text-white font-semibold transition
          ${otp.length === 6 
            ? "bg-blue-600 hover:bg-blue-700" 
            : "bg-gray-400 cursor-not-allowed"}`}
      >
        Verify OTP
      </button>

    </div>
  </div>
)
};