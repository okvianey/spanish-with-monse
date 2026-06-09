import "./TrustBar.css";
// import { Trans } from "react-i18next";
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrustBar = ({ t }) => {
  
  return (
    <section className="trust-bar">
      <div className="trust-bar-container">

        <div className="trust-item">
          <p className="trust-value">
            <span><FontAwesomeIcon icon={faBook} /></span>
            {t("main.trustBar.1")}
          </p>
          <p className="trust-label">{t("main.trustBar.label1")}</p>
        </div>
        <div className="trust-item">
          <p className="trust-value">
            <span><FontAwesomeIcon icon={faLaptop} /></span> {t("main.trustBar.2")}</p>
          <p className="trust-label">{t("main.trustBar.label2")}</p>
        </div>
        <div className="trust-item">
          <p className="trust-value">
            <span><FontAwesomeIcon icon={faStar} /></span> {t("main.trustBar.3")}</p>
          <p className="trust-label">{t("main.trustBar.label3")}</p>
        </div>
      </div>

      <div className="trust-link">
        <a
          href="https://www.italki.com/en/teacher/1203217"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shape outline-purple"
        >
          {t("main.trustBar.button")}
        </a>
      </div>
    </section>
  );
};

export default TrustBar;