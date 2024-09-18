import { useState } from "react";
import { CiVolumeHigh } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";

const DataLi = [
  { id: 1, title: "English" },
  { id: 2, title: "French" }, // Fixed id to make it unique
];

const TranslationOutput = () => {
  const [selectitems, setselectitems] = useState("");

  const CLickBckgroundHandler = (value) => {
    setselectitems(value); // Added to set selected item
  };

  return (
    <div className="lg:w-6/12 w-full bg-custom-semiDark2/90 rounded-3xl mx-auto lg:p-8 p-2 items-center  border border-custom-lighterDark">
      <div>
        <ul className="flex lg:space-x-12 space-x-2 ">
          {DataLi.map((items) => (
            <li
              key={items.id}
              className={`text-custom-lighterDark font-bold cursor-pointer lg:px-4 py-2  rounded-2xl  ${
                selectitems === items.title
                  ? "bg-white/10 text-custom-veryLightGray transition-colors duration-200 "
                  : ""
              }`}
              onClick={() => CLickBckgroundHandler(items.title)}
            >
              {items.title}
            </li>
          ))}

          <li className="text-custom-lighterDark font-bold cursor-pointer">
            <select className="bg-transparent  outline-none py-2">
              <option className="bg-custom-semiDark2/90" value="Spanish">
                Spanish
              </option>
            </select>
          </li>
        </ul>
        <hr className="border border-custom-lighterDark mt-4" />
      </div>
      <div className="w-full mt-8">
        <p className="h-44 font-bold text-custom-veryLightGray"></p>
      </div>
      <div className="flex mt-10 justify-between items-center">
        <div className="flex space-x-3 items-center">
          <div className="border-[3px] border-custom-lighterDark text-custom-lighterDark p-2 text-2xl rounded-lg cursor-pointer">
            <CiVolumeHigh />
          </div>
          <div className="border-[3px] border-custom-lighterDark text-custom-lighterDark p-2 text-2xl rounded-lg cursor-pointer">
            <IoCopyOutline />
          </div>
        </div>
        <div className="ml-auto"></div>
      </div>
    </div>
  );
};

export default TranslationOutput;
