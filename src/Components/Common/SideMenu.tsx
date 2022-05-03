import { useNavigate } from "react-router-dom";

const SideMenu = (): JSX.Element => {
  const navigate = useNavigate();

  const reactUsePath = "/react-use";
  const selectedReactUse = location.pathname === reactUsePath;

  return (
    <ul className="menu px-2 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* TODO: MenuItem コンポーネントに分離する */}
      <li
        className={`text-xl font-medium ${
          selectedReactUse && "bg-primary"
        } rounded-lg`}
      >
        <a onClick={() => navigate(reactUsePath)}>react-use</a>
      </li>
    </ul>
  );
};

export default SideMenu;
