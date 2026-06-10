import Hero from '../../Components/Hero/Hero';
import Beneficios from '../../Components/Beneficios/Beneficios';
import Objetivos from '../../Components/Objetivos/Objetivos';
import Banner from '../../Components/Banner/Banner';
import Process from '../../Components/Process/Process';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Testimonios from '../../Components/Testimonios/Testimonios';
import TrustBar from "../../Components/TrustBar/TrustBar";

const Main = ({ t }) => {

  return (
    <main>
      <Hero t={t} />
      <TrustBar t={t} />
      <Objetivos t={t} />
      <Beneficios t={t} />
      <Testimonios t={t} />
      <AboutMe t={t} />
      <Process t={t} />
      {/* <Banner 
        title={t("main.banner1.title")}
        description={t("main.banner1.content")}
        bgColor="var(--gradient)"
        btnColor="btn-shape green-btn"
        btnDescription={t("buttons.bookYourClass")}
      /> */}
      <Banner 
        title={t("main.banner2.title")}
        description={t("main.banner2.content")} 
        bgColor="var(--black)"
        btnColor="btn-shape purple-btn"
        btnDescription={t("buttons.bookClass")}
      />
    </main>
  )
}

export default Main;