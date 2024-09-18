import Logo from "../../assets/Svg/logo.svg";
import TranslationInput from "../../components/TranslationInput/TranslationInput";
import TranslationOutput from "../../components/TranslationOutput/TranslationOutput";
import "./Home.css";

const Home = () => {
  return (
    <div className="lg:mx-[50px] ">
      <div className="grid place-content-center ">
        <img src={Logo} alt="Logo" className="lg:mt-28" />
      </div>
      <div className="lg:flex justify-center gap-5 lg:mt-16 w-full  h-full space-y-6 lg:space-y-0 ">
        <TranslationInput />
        <TranslationOutput />
      </div>
    </div>
  );
};

export default Home;
