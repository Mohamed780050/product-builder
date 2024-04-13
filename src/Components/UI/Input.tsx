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
}
function Input({
  element,
  gettingDataFromTheinput,
  defaultValue = "",
}: Inputs) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600" htmlFor={element.id}>
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
    </div>
  );
}
export default Input;
