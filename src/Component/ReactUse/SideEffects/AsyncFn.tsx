import { useAsyncFn } from "react-use";

const AsyncFn = ({ url }: { url: string }) => {
  const [state, doFetch] = useAsyncFn(async () => {
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
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={doFetch}
      >
        Start loading
      </button>
    </div>
  );
};

export default AsyncFn;
