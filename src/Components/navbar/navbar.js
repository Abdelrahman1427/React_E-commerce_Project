import { Link } from "react-router-dom";
import images2 from "../images/2.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 ">
        <div className="container-fluid">
          {/* <Link to="/home" className="navbar-brand fs-1 ms-5">
            Navbar
          </Link> */}
          <a class="navbar-brand" href="/">
            <div class="logo-image">
              <img src={images2} class="img-fluid" />
            </div>
          </a>
          <div
            className="collapse navbar-collapse justify-content-end pe-5"
            id="navbarNav"
          >
            <ul className="navbar-nav  fs-4 ">
              <li className="nav-item">
                <Link to="/Home" className="nav-link active me-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Shop" className="nav-link active me-2">
                  Shop
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/donation" className="nav-link active me-2">
                  Donation
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/signup" className="nav-link active me-2">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/supportUs" className="nav-link active me-2">
                  SupportUs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active me-2">
                  AboutUs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
