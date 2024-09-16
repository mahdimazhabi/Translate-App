import Logo from "../../assets/Svg/logo.svg";
import TranslationInput from "../../components/TranslationInput/TranslationInput";
import TranslationOutput from "../../components/TranslationOutput/TranslationOutput";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="grid place-content-center mt-28">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center gap-5 mt-16">
        <TranslationInput />
        <TranslationOutput />
      </div>
    </div>
  );
};

export default Home;
