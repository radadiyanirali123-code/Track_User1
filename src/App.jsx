import { useState } from "react";
import Login from "./pages/login";


export default function App() {
const [email, setEmail] = useState(null);
return email ? <Login email={email} /> : <Login setEmail={setEmail} />;
}