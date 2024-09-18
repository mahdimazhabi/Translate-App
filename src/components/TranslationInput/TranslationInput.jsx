import { CiVolumeHigh } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

const DataLi = [
  { id: 1, title: "Detect Language" },
  { id: 2, title: "English" },
  { id: 3, title: "French" },
];

const TranslationInput = () => {
  const [selectitems, setSelectItems] = useState("");
  const [changeInput, setChangeInput] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const ClickBackgroundHandler = (value) => {
    setSelectItems(value);
  };

  const ChangeInputHandler = (e) => {
    const value = e.target.value;
    setChangeInput(value);
  };

  const handleTranslate = () => {
    if (changeInput.trim() && selectitems) {
      const langPair = selectitems === "French" ? "en|fr" : "en|es"; // Example logic
      axios
        .get(
          `https://mymemory.translated.net/doc/spec.php${encodeURI(
            changeInput
          )}&langpair=${langPair}`
        )
        .then((res) => {
          setTranslatedText(res.data.responseData.translatedText);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
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
                selectitems === items.title
                  ? "bg-white/10 text-custom-veryLightGray"
                  : ""
              }`}
              onClick={() => ClickBackgroundHandler(items.title)}
            >
              {items.title}
            </li>
          ))}

          <li className="text-custom-lighterDark font-bold cursor-pointer">
            <select
              className="bg-transparent outline-none py-2"
              onChange={(e) => setSelectItems(e.target.value)}
            >
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
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
          <div className="border-[3px] border-custom-lighterDark text-custom-lighterDark p-2 text-2xl rounded-lg cursor-pointer">
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

      {translatedText && (
        <div className="mt-6 text-custom-veryLightGray">
          <h3 className="font-bold">Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslationInput;
