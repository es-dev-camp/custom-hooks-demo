import { useToggle } from "react-use";

import CardFrame from "../CardFrame";

import Async from "./Async";
import AsyncFn from "./AsyncFn";
import AsyncRetry from "./AsyncRetry";
import BeforeUnload from "./BeforeUnload";
import Cookie from "./Cookie";
import CopyToClipboard from "./CopyToClipboard";
import Debounce from "./Debounce";
import ErrorDemo from "./Error";
import Favicon from "./Favicon";
import LocalStorage from "./LocalStorage";
import LockBodyScroll from "./LockBodyScroll";
import Permission from "./Permission";
import RafLoop from "./RafLoop";
import SessionStorage from "./SessionStorage";
import Throttle from "./Throttle";
import ThrottleFn from "./ThrottleFn";
import Title from "./Title";

type ContentType = {
  name: string;
  body: (props?: unknown) => JSX.Element;
};

const StarWarsPersonDataUrl = "https://swapi.dev/api/people/1/";

const Category = (): JSX.Element => {
  const title = "Side-effects";
  const [toggle, setToggle] = useToggle(false);
  const contents: ContentType[] = [
    { name: "useAsync", body: () => Async({ url: StarWarsPersonDataUrl }) },
    { name: "useAsyncFn", body: () => AsyncFn({ url: StarWarsPersonDataUrl }) },
    {
      name: "useAsyncRetry",
      body: () => <AsyncRetry url={StarWarsPersonDataUrl} />,
    },
    { name: "useBeforeUnload", body: BeforeUnload },
    { name: "useCookie", body: Cookie },
    { name: "useCopyToClipboard", body: CopyToClipboard },
    { name: "useDebounce", body: Debounce },
    { name: "useError", body: ErrorDemo },
    { name: "useFavicon", body: Favicon },
    { name: "useLocalStorage", body: LocalStorage },
    { name: "useLockBodyScroll", body: LockBodyScroll },
    { name: "useRafLoop", body: RafLoop },
    { name: "useSessionStorage", body: SessionStorage },
    { name: "useThrottle", body: () => Throttle({ value: 100 }) },
    { name: "useThrottleFn", body: () => ThrottleFn({ value: 100 }) },
    { name: "useTitle", body: Title },
    { name: "usePermission", body: Permission },
  ];
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input
        type="checkbox"
        checked={toggle}
        onClick={setToggle}
        onChange={() => console.log(`Changed ${title} collapse`)}
      />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {contents.map((content, index) => {
            return (
              <CardFrame
                key={index}
                feature={content.name}
                children={content.body}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
