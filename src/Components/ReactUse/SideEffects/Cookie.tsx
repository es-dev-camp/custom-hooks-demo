import { useEffect, useState } from "react";
import { useCookie } from "react-use";

const Cookie = () => {
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie(`my-awesome-cookie-${counter}`);
    setCounter((c) => c + 1);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button className="btn btn-xs btn-outline btn-info" onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button className="btn btn-xs btn-outline btn-info" onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
};
export default Cookie;
