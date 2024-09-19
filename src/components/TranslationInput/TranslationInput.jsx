import { CiVolumeHigh } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import contextApi from "../../context/contextApi";
const DataLi = [
  { id: 1, title: "Detect Language", value: "auto" },
  { id: 2, title: "English", value: "en" },
  { id: 3, title: "French", value: "fr" },
];

const TranslationInput = () => {
  const setcount = useContext(contextApi);

  const [selectitems, setSelectItems] = useState("en");
  const [changeInput, setChangeInput] = useState("");
  const ClickBackgroundHandler = (value) => {
    setSelectItems(value);
  };

  const ChangeInputHandler = (e) => {
    const value = e.target.value;
    setChangeInput(value);
  };

  const handleTranslate = () => {
    if (!changeInput) {
      alert("Please enter text to translate.");
      return;
    }

    fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        changeInput
      )}&langpair=en|${selectitems}`
    )
      .then((response) => response.json())
      .then((data) => {
        const translated = data.responseData.translatedText;
        setcount.setCount(translated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ClickCopyHandler = () => {
    if (changeInput) {
      navigator.clipboard
        .writeText(changeInput)
        .then(() => {
          alert("Text copied successfully!");
        })
        .catch(() => {
          alert("Failed to copy text:");
        });
    } else {
      alert("Input Invalid");
    }
  };

  return (
    <div className="w-full lg:w-6/12 bg-custom-mediumDark/100 mx-auto lg:p-8 p-2 rounded-3xl border border-custom-lighterDark">
      <div>
        <ul className="flex lg:space-x-6 space-x-2">
          {DataLi.map((items) => (
            <li
              key={items.id}
              className={`text-custom-lighterDark font-bold lg:text-base cursor-pointer lg:px-4 py-2 rounded-2xl ${
                selectitems === items.value
                  ? "bg-white/10 text-custom-veryLightGray transition-colors duration-200"
                  : ""
              }`}
              onClick={() => ClickBackgroundHandler(items.value)}
            >
              {items.title}
            </li>
          ))}

          <li className="text-custom-lighterDark font-bold cursor-pointer">
            <select
              className="bg-transparent  outline-none py-2"
              onChange={(e) => setSelectItems(e.target.value)}
            >
              <option className="bg-custom-mediumDark/100" value="es">
                Spanish
              </option>
              <option className="bg-custom-mediumDark/100" value="fr">
                French
              </option>
            </select>
          </li>
        </ul>
        <hr className="border border-custom-lighterDark mt-4" />
      </div>

      <div className="w-full mt-8">
        <textarea
          className="w-full h-40 bg-transparent outline-none text-custom-veryLightGray resize-none text-lg font-semibold"
          value={changeInput}
          onChange={ChangeInputHandler}
          placeholder="Enter text to translate"
        ></textarea>
      </div>

      <div className="float-right">
        <span className="text-custom-lighterDark font-medium">
          {changeInput.length}/500
        </span>
      </div>

      <div className="flex mt-10 items-center">
        <div className="flex space-x-3 items-center">
          <div className="border-[3px] border-custom-lighterDark text-custom-lighterDark p-2 text-2xl rounded-lg cursor-pointer">
            <CiVolumeHigh />
          </div>
          <div
            className="border-[3px] border-custom-lighterDark text-custom-lighterDark p-2 text-2xl rounded-lg cursor-pointer"
            onClick={ClickCopyHandler}
          >
            <IoCopyOutline />
          </div>
        </div>
        <div className="ml-auto">
          <button
            onClick={handleTranslate}
            className="text-custom-veryLightGray bg-custom-blue border border-custom-lightBlue lg:px-12 px-6 py-4 text-lg rounded-xl font-bold"
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationInput;
