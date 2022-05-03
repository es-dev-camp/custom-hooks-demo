import { useAsync } from "react-use";

const Async = ({ url }: { url: string }) => {
  const state = useAsync(async () => {
    const response = await fetch(url);
    const result = await response.json();
    return JSON.stringify(result, null, 2);
  }, [url]);

  return (
    <div>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>Error: {state.error.message}</div>
      ) : (
        <div>Value: {state.value}</div>
      )}
    </div>
  );
};

export default Async;
