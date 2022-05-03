import { useState } from "react";
import { useDebounce, useFavicon } from "react-use";

const Favicon = () => {
  const [faviconUrl, setFaviconUrl] = useState(
    "https://custom-hooks-demo-dfcc4.web.app/assets/favicon.17e50649.svg"
  );
  const [debouncedValue, setDebouncedValue] = useState(faviconUrl);
  useDebounce(
    () => {
      setDebouncedValue(faviconUrl);
    },
    1000,
    [faviconUrl]
  );

  useFavicon(debouncedValue);
  return (
    <>
      URL を指定すれば任意の Favicon に差し替えることができる
      <br />
      <input
        type="text"
        value={faviconUrl}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setFaviconUrl(currentTarget.value);
        }}
      />
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() =>
          setFaviconUrl(
            "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico"
          )
        }
      >
        stackoverflow にする
      </button>
    </>
  );
};
export default Favicon;
