import "./Beneficios.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Trans } from 'react-i18next';

const Beneficios = ({ t }) => {

  return (
    <section id="beneficios" className="section" data-scroll>
      <div className="beneficios-container container">
        <h2>
          <Trans i18nKey='main.benefits.title'>
            Disfruta de los <span className="highlight">beneficios</span> de aprender Español con clases privadas en línea.
          </Trans>
        </h2>

        <div className="beneficios-box-container">
          {/* Avanza a tu ritmo */}
          <div className="beneficios-box">
            <FontAwesomeIcon className="beneficios-icon" icon={faClock} />
            <div className="main.beneficios-box-text">
              <h5>{t('main.benefits.Rhythm')}</h5>
              <p>{t('main.benefits.RhythmText')}</p>
            </div>
          </div>
          {/* Temas de tu interés */}
          <div className="beneficios-box">
            <FontAwesomeIcon className="beneficios-icon" icon={faComments} />
            <div className="beneficios-box-text">
              <h5>{t('main.benefits.Conversations')}</h5>
              <p>{t('main.benefits.ConversationsText')}</p>
            </div>
          </div>
          {/* Desde cualquier lugar */}
          <div className="beneficios-box">
            <FontAwesomeIcon className="beneficios-icon" icon={faLocationDot} />
            <div className="beneficios-box-text">
              <h5>{t('main.benefits.Place')}</h5>
              <p>{t('main.benefits.PlaceText')}</p>
            </div>
          </div>
          {/* Resuelve tus dudas */}
          <div className="beneficios-box">
            <FontAwesomeIcon className="beneficios-icon" icon={faLightbulb} />
            <div className="beneficios-box-text">
              <h5>{t('main.benefits.Questions')}</h5>
              <p>{t('main.benefits.QuestionsText')}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Beneficios;