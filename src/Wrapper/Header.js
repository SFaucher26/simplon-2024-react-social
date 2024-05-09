import logo from "../assets/images/oiseau.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div>
          <a href={"/"}>
            <img style={{ height: "60px" }} src={logo} alt="Logo d'un oiseau" />
          </a>
          <div>
              <Link className="home navLink" to={"/"}>
                Home
              </Link>
              <Link className="login navLink" to={"/login"}>
                Login
              </Link>
              <Link className="register navLink" to={"/signup"}>
                signup
              </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
