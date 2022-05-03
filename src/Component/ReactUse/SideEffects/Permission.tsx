import { usePermission } from "react-use";

const Permission = () => {
  const state = usePermission({ name: "geolocation" });
  return (
    <>
      geolocation<pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Permission;
