import "./Navbar.css";
import Button from "../Button/Button";
function Navbar() {
   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="navbarContainer">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="px-5">
            <img src="/assets/leaf.png" className="navbarSvg" alt="logo" />
          </a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Button 
              text="Konaklama" 
              onClick={() => scrollToSection('stay')}
            />
            </li>
            <li>
              <Button 
                text="Yorumlar" 
                onClick={() => scrollToSection('comments')}
              />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
           <Button 
          text="İletişim" 
          onClick={() => scrollToSection('contact')}
        />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
