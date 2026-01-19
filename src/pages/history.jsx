import { useEffect, useState } from "react";
import axios from "axios";

export default function History({ email }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!email) return;

    axios
      .get(`http://localhost:5000/api/history/${email}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [email]);

  return (
    <ul>
      {data.map((x) => (
        <li key={x._id}>
          {x.browser} | {x.deviceType} | {x.loginMethod}
        </li>
      ))}
    </ul>
  );
};