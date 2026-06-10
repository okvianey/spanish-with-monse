import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import iconHamburger from "../../Assets/icons/list.svg";
import iconX from "../../Assets/icons/x-lg.svg";
import "./Navbar.css";
import TranslateButton from "../TranslateButton";

const Nav = ({ checkLocation, t, resetScroll }) => {
  // i18next variables
  const bookTrialClassButton = t("buttons.bookTrialClass");
  const howToStart = t("nav.howToStart");
  const aboutMe = t("nav.aboutMe");


  const [ isOpen, setIsOpen ] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);



 useEffect(() => {
  const handleClickOutside = (event) => {
    if (!isOpen) return;

    if (
      menuRef.current &&
      buttonRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [isOpen]);

  return (
    <header id="header">
      <nav id="nav" className="section">
        {/* Desktop Nav */}
        <Link className="nav-logo" to="/" onClick={() => resetScroll()}>
          spanish with monse
        </Link>

        <div className="nav-menu-header">

          {checkLocation === "/" ? (
            <div className="nav-links">
              <a className="nav-link" href="#process">
                {howToStart}
              </a>
              <a className="nav-link" href="#about-me">
                {aboutMe}
              </a>
            </div>
          ) : (
            <div></div>
          )}


          <div className="nav-buttons">
            {checkLocation === "/" ? (
              <TranslateButton id={"toggle-translate"} />
            ) : (
              <div></div>
            )}

            {/* <Link to="/trialClass" className="btn-shape outline-purple">
              {bookTrialClassButton}
            </Link> */}
          </div>
        </div>



        {/* Nav for mobile */}
        <div className="nav-mobile">
  <img
    ref={buttonRef}
    className="nav-mobile-btn"
    src={isOpen ? iconX : iconHamburger}
    alt="hamburger-button"
    onClick={() => setIsOpen(prev => !prev)}
  />

  <div
    ref={menuRef}
    className={`nav-mobile-menu ${isOpen ? "on-nav" : ""}`}
  >
    <div className="nav-mobile-menu-content">
      <TranslateButton id="toggle-translate-mobile" />

      {checkLocation === "/" && (
        <div className="nav-links-mobile">
          <a
            className="nav-link"
            href="#process"
            onClick={() => setIsOpen(false)}
          >
            {howToStart}
          </a>

          <a
            className="nav-link"
            href="#about-me"
            onClick={() => setIsOpen(false)}
          >
            {aboutMe}
          </a>
        </div>
      )}

      <Link
        to="/trialClass"
        className="btn-shape purple-btn"
        onClick={() => setIsOpen(false)}
      >
        {bookTrialClassButton}
      </Link>
    </div>
  </div>
</div>



      </nav>
    </header>
  );
};

export default Nav;
