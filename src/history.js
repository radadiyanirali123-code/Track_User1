import axios from "axios";
import { useEffect, useState } from "react";


export default ({ email }) => {
const [data, setData] = useState([]);


useEffect(() => {
axios.get(`http://localhost:5000/api/history/${email}`)
.then(res => setData(res.data));
}, []);


return (
<ul>
{data.map((x, i) => (
<li key={i}>{x.browser} | {x.os} | {x.device} | {x.ip} | {x.status}</li>
))}
</ul>
);
};