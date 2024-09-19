import Logo from "../../assets/Svg/logo.svg";
import "./Home.css"; // مطمئن شوید که این فایل CSS وجود دارد و درست کار می‌کند
import TranslationOutput from "../../components/TranslationOutput/TranslationOutput"; // مسیر درست برای TranslationOutput
import TranslationInput from "../../components/TranslationInput/TranslationInput"; // مسیر درست برای TranslationInput
import { useContext } from "react";
import contextApi from "../../context/contextApi";

const Home = () => {
  const contextAp = useContext(contextApi);
  console.log(contextAp.count);
  return (
    <div className="lg:mx-[50px]">
      {" "}
      {/* در اینجا فضای افقی برای کامپوننت در اندازه‌های بزرگ‌تر از 50px اضافه می‌شود */}
      <div className="grid place-content-center">
        <img src={Logo} alt="Logo" className="lg:mt-28" />{" "}
        {/* لوگو با فاصله بالایی در اندازه‌های بزرگ‌تر */}
      </div>
      <div className="lg:flex justify-center gap-5 lg:mt-16 w-full h-full space-y-6 lg:space-y-0">
        {/* فضای خالی و چیدمان مناسب برای کامپوننت‌های ورودی و خروجی ترجمه */}

        <TranslationInput />
        <TranslationOutput />
      </div>
    </div>
  );
};

export default Home;
