import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i className="bi bi-shop me-3"></i>
          {props.name}
        </Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item px-2">
            <Link to="/services" className="nav-link text-light mx-1">
              Services
            </Link>
          </li>

          <li className="nav-item px-2">
            <Link to="/about" className="nav-link text-light mx-1">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Header;
