import "./Objetivos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { Trans } from 'react-i18next';

const Objetivos = ({ t }) => {
    return (
        <section id="objetivos" className="section" data-scroll>
            <div className="container">
                <div className="title">
                    <h2 data-splitting>
                        <Trans i18nKey={"main.goals.title"}>
                            Clases totalmente enfocadas en alcanzar tus <span className="highlight">objetivos</span>.
                        </Trans>
                    </h2>
                </div>
                <div className="objetivos-container-box">
                    <div className="objetivos-box">
                        <div className="objetivos-box-content">
                            <div className="objetivos-box-icon">
                                <FontAwesomeIcon
                                    className="objetivos-icon"
                                    icon={faRocket}
                                />
                            </div>
                            <div className="objetivos-text">
                                <h4>{t("form.beginner")}</h4>
                                <p>{t("main.goals.beginner")}</p>
                            </div>
                            <div className="objetivos-list">
                                <p>{t("main.goals.perfectForYou")}</p>
                                <ul>
                                    <Trans i18nKey={"main.goals.beginnerList"}>
                                        <li></li>
                                        <li></li>
                                    </Trans>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="objetivos-box">
                        <div className="objetivos-box-content">
                            <div className="objetivos-box-icon">
                                <FontAwesomeIcon className="objetivos-icon" icon={faMessage} />
                            </div>
                            <div className="objetivos-text">
                                <h4>{t("form.conversation")}</h4>
                                <p>{t("main.goals.conversation")}</p>
                            </div>
                            <div className="objetivos-list">
                                <p>{t("main.goals.perfectForYou")}</p>
                                <ul>
                                    <Trans i18nKey={"main.goals.conversationList"}>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </Trans>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="objetivos-box">
                        <div className="objetivos-box-content">
                            <div className="objetivos-box-icon">
                                <FontAwesomeIcon className="objetivos-icon" icon={faArrowUpRightDots} />
                            </div>
                            <div className="objetivos-text">
                                <h4>{t("form.nextLevel")}</h4>
                                <p>{t("main.goals.nextLevel")}</p>
                            </div>
                            <div className="objetivos-list">
                                <p>{t("main.goals.perfectForYou")}</p>
                                <ul>
                                    <Trans i18nKey={"main.goals.nextLevelList"}>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </Trans>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Objetivos;
