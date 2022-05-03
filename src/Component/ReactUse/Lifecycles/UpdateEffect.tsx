import { useEffect, useState } from "react";
import { useUpdateEffect } from "react-use";

const UpdateEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useUpdateEffect(() => {
    if (count <= 1) {
      console.log("useUpdateEffect count:", count);
    }

    return () => {
      setCount(0);
    };
  }, [count]);

  return (
    <div>
      マウント時は実行せず、値が更新された時のみ実行される
      <br />
      Count: {count}
    </div>
  );
};

export default UpdateEffect;
