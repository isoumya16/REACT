import "../css/header.css";
import { useNavigate } from "react-router-dom";

const Headercomp = () => {
  let navigate = useNavigate();

  return (
    <div id="navbar-parent">
      <div id="logo">NexGoods</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox-toggle" />
        <label for="checkbox-toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
             Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/products");
              }}
            >
              Products
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Headercomp;
