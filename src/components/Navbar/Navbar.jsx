import "./Navbar.css"
import Button from "../Button/Button";
function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="px-5"><img src="/assets/leaf.png" className="navbarSvg" alt="logo" /></a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end bg-white">
          <Button />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
