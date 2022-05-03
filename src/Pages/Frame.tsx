import { Outlet } from "react-router-dom";

import Navbar from "../Components/Common/Navbar";
import SideMenu from "../Components/Common/SideMenu";

const Frame = (): JSX.Element => {

  return (
    <div className="h-full">
      <Navbar />
      {/* FIXME: Padding で固定値を指定して無理矢理調整しているのでなんとかする */}
      <div className="drawer drawer-mobile p-2 pt-16">
        <input
          id="hooks-list-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-side">
          <label htmlFor="hooks-list-drawer" className="drawer-overlay" />
          <SideMenu />
        </div>
        <div className="drawer-content">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Frame;
