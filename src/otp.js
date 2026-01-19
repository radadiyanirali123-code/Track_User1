

import { useState } from "react";
import History from "./history";


export default ({ email }) => {
const [otp, setOtp] = useState("");
const [ok, setOk] = useState(false);


const verify = async () => {
const res = await axios.post("http://localhost:5000/api/otp", { email, otp });
if (res.data.success) setOk(true);
};


return ok ? <History email={email} /> : (
<>
<input onChange={e => setOtp(e.target.value)} />
<button onClick={verify}>Verify OTP</button>
</>
);
};