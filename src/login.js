import axios from "axios";
import { useState } from "react";
import Otp from "./Otp";


export default ({ setEmail, email }) => {
const [e, setE] = useState("");
const [otp, setOtp] = useState(false);


const login = async () => {
const res = await axios.post("http://localhost:5000/api/login", { email: e });
setEmail(e);
setOtp(res.data.otp);
};
if (otp) return <Otp email={e} />;


return (
<>
<input placeholder="email" onChange={x => setE(x.target.value)} />
<button onClick={login}>Login</button>
</>
);
};