import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks"
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/avatar-light.jpg";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";
  return (
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @ProfCastello
      </Profile>
      <Switch></Switch>
      <div id="links">
        <ul>
          <Links link={"https://github.com"}>GitHub</Links>
          <Links link={"#"}>Instagram</Links>
          <Links link={"#"}>Portfólio</Links>
          <Links link={"#"}>Projetos</Links>
        </ul>
      </div>
      <div id="socialLinks">
        <SocialLinks href={"#"} icon={"logo-github"} />
        <SocialLinks href={"#"} icon={"logo-instagram"} />
        <SocialLinks href={"#"} icon={"logo-facebook"} />
        <SocialLinks href={"#"} icon={"logo-twitter"} />
      </div>
      <Footer link={"#"}>@ProfCastello</Footer>
    </div>
  );
};

export default App;
