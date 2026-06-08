import './AboutMe.css';
import profilePicture from "../../Assets/images/profile-2.jpg";
import { Trans } from 'react-i18next';
import { t } from 'i18next';

const AboutMe = () => {
  const italikiProfileURL = "https://www.italki.com/en/teacher/1203217?lv=1";
  const whatsappNumber = "529211446166";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;
  
  return (
      <section id="about-me" className='section'>
        <div className='about-me-container'>
          <div className='about-me-box'>
            <div className="about-me-picture">
                <img src={profilePicture}
                    alt="profile" />
            </div>
            <div className="about-me-text">
                <h2 className='highlight'>
                  <Trans i18nKey={"main.aboutMe.hello"}>
                    ¡Hola!
                  </Trans>
                </h2>
                <h3>{t("main.aboutMe.myName")}</h3>
                <p>{t("main.aboutMe.content")}</p>
                <div className="about-me-buttons">
                  <a 
                    href={italikiProfileURL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-shape outline-purple"
                  >
                    {t("main.aboutMe.visitProfile")}
                  </a>
                  <a 
                    href={whatsappURL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-shape purple-btn"
                  >
                    {t("main.aboutMe.messageWhatsapp")}
                  </a>
                </div>
            </div>
          </div>

        </div>
      </section>
  )
}

export default AboutMe;
