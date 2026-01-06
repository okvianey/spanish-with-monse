import './AboutMe.css';
import profilePicture from "../../Assets/images/profile-2.jpg";
import { Trans } from 'react-i18next';
import { t } from 'i18next';

const AboutMe = () => {
  
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
            </div>
          </div>

        </div>
      </section>
  )
}

export default AboutMe;
