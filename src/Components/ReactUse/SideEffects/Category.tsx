import CategoryFrame from "../CategoryFrame";

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

const StarWarsPersonDataUrl = "https://swapi.dev/api/people/1/";
const Category = (): JSX.Element => (
  <CategoryFrame
    title="Side-effects"
    contents={[
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
    ]}
  />
);

export default Category;
