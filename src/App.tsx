import { useRoutes } from "react-router-dom";

import "./App.css";
import routes from "./Routes";

const App = (): JSX.Element => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};

export default App;
