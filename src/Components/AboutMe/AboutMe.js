import './AboutMe.css';
import profilePicture from "../../Assets/images/profile-2.jpg";
import { t } from 'i18next';

const AboutMe = () => {
  const italikiProfileURL = "https://www.italki.com/en/teacher/1203217";
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
            <h3>
              {t("main.aboutMe.title")}
            </h3>
            <p>{t("main.aboutMe.intro")}</p>
            <p>{t("main.aboutMe.content")}</p>
          </div>
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
    </section>
  )
}

export default AboutMe;
