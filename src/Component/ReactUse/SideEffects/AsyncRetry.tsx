import { useAsyncRetry } from "react-use";

const AsyncRetry = ({ url }: { url: string }) => {
  const state = useAsyncRetry(async () => {
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
      {!state.loading && (
        <button
          className="btn btn-xs btn-outline btn-info"
          onClick={state.retry}
        >
          Start loading
        </button>
      )}
    </div>
  );
};

export default AsyncRetry;
