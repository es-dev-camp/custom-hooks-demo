import { useNavigate } from "react-router-dom";

const SideMenu = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <ul className="menu px-2 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li className="text-xl font-medium bg-primary rounded-lg">
        <a onClick={() => navigate("/react-use")}>react-use</a>
      </li>
    </ul>
  );
};

export default SideMenu;
