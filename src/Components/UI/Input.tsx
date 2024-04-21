import { ChangeEvent } from "react";

interface Inputs {
  element: {
    id: string;
    name: "Title" | "Description" | "ImgURL" | "Price";
    lable: string;
    type: "text" | "number";
  };
  gettingDataFromTheinput: (value: ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
  ers: {
    Title: string | boolean;
    Description: string | boolean;
    ImgURL: string | boolean;
    Price: string | boolean;
  };
}
function Input({
  element,
  gettingDataFromTheinput,
  defaultValue = "",
  ers,
}: Inputs) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600 mb-[1px]" htmlFor={element.id}>
        {element.lable}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="border p-2 shadow-sm outline-none focus:ring-1 rounded-md ring-indigo-600"
        name={element.name}
        id={element.id}
        onChange={(e) => {
          gettingDataFromTheinput(e);
        }}
      />
      <p className="text-red-800 text-sm">{ers[`${element.name}`]}</p>
    </div>
  );
}
export default Input;
