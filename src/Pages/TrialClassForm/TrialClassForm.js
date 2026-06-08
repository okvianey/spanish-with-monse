import ContactForm from "../../Components/Form/ContactForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

const TrialClassForm = ({ t }) => {
  return (
    <section id="trialClassForm">
      <div id="form" className="register">
        <div className="infoForm">
          <h3>{t("trialClassForm.title")}</h3>
          <p>{t("trialClassForm.description")}</p>
        </div>

        <ContactForm />
      </div>
      <div style={{ margin: '30px 10px 10px 10px', display: 'flex', justifyContent: 'center' }}>
        <Link
          to='/'
          style={{ display: 'flex', alignItems: 'center',}}
        >
          <FontAwesomeIcon icon={faRotateLeft} className="rotate-icon" />
          {t("thanks.back")}
        </Link>

      </div>
    </section>
  );
};

export default TrialClassForm;
