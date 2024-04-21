import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import valid from "../../validation/valid";
import ListBox from "./Listbox";
interface Iprops {
  closeModal: () => void;
  btnName?: string;
  InputInfo?: {
    Title: string;
    ImgURL: string;
    Description: string;
    Price: number;
  };
}
interface Inputs {
  id: string;
  name: "Title" | "Description" | "ImgURL" | "Price";
  lable: string;
  type: "text" | "number";
}
const Info: Inputs[] = [
  {
    id: "Title",
    name: "Title",
    lable: "Title",
    type: "text",
  },
  {
    id: "Description",
    name: "Description",
    lable: "Description",
    type: "text",
  },
  {
    id: "Image link",
    name: "ImgURL",
    lable: "Product Image Link",
    type: "text",
  },
  {
    id: "Price",
    name: "Price",
    lable: "Product Price",
    type: "number",
  },
];
const colors = [
  "#a855f7",
  "#2563eb",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4A86",
  "#CB1CBD",
  "#000000",
  "#645CBB",
  "#1F8A70",
  "#1F8a70",
  "#B20000",
  "#FF0032",
];
function Form({ closeModal, btnName = "Add", InputInfo }: Iprops) {
  const [productData, setProductData] = useState({
    Title: "",
    Description: "",
    ImgURL: "",
    Price: "",
  });
  const [productErrors, setProductErros] = useState<{
    Title: string | boolean;
    Description: string | boolean;
    ImgURL: string | boolean;
    Price: string | boolean;
  }>({
    Title: false,
    Description: false,
    ImgURL: false,
    Price: false,
  });
  const [chosenColors, setChosenColors] = useState<string[]>([]);
  const [tryToSend, setTryToSend] = useState<boolean>(false);
  //Getting info from the inputs files
  function gettingDataFromTheinput(e: ChangeEvent<HTMLInputElement>) {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
    console.log(productData);
  }
  async function sendingToTheDatabase() {
    await fetch("http://localhost:3500/InteractWithTheDB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: productData.Title,
        discription: productData.Description,
        ImgURL: productData.ImgURL,
        price: productData.Price,
        colors: [...chosenColors],
        catagory: "cat",
      }),
    });
  }
  return (
    <form className="space-y-3" action="" onSubmit={(e) => e.preventDefault()}>
      {Info.map((element) => (
        <Input
          element={element}
          ers={productErrors}
          defaultValue={
            InputInfo === undefined ? "" : `${InputInfo[`${element.name}`]}`
          }
          gettingDataFromTheinput={gettingDataFromTheinput}
        />
      ))}
      <div>
        <ListBox></ListBox>
      </div>
      {chosenColors && (
        <ul className="flex flex-wrap">
          {chosenColors.map((color) => (
            <li
              style={{
                backgroundColor: color,
              }}
              className={`rounded mr-1 mx-1 p-[2px] text-white w-fit`}
            >
              {color}
            </li>
          ))}
        </ul>
      )}

      <div>
        <h3 className="mb-1">Colors:</h3>
        <ul className="flex space-x-1 items-center justify-center flex-wrap ">
          {colors.map((color) => (
            <li
              style={{ backgroundColor: color, width: 20, height: 20 }}
              className="rounded-full mb-1 cursor-pointer"
              onClick={() => {
                const check = chosenColors.findIndex(
                  (chosenColor) => chosenColor === color
                );
                if (check !== -1) {
                  console.log("The color is chosend allready");
                } else {
                  setChosenColors([...chosenColors, color]);
                }
              }}
            ></li>
          ))}
        </ul>
        {tryToSend && chosenColors.length === 0 ? (
          <p className="text-red-800">Chose a color</p>
        ) : null}
      </div>

      <div className="flex space-x-3">
        <Button
          onClick={async () => {
            const check = valid(productData);
            const theValues = Object.values(check);
            const finalyReuslt = theValues.every((key) => key === false);
            if (finalyReuslt === true && chosenColors.length !== 0) {
              await sendingToTheDatabase();
              closeModal();
              window.location.reload();
            } else {
              setProductErros({
                ...check,
              });
              setTryToSend(true);
            }
          }}
          Name={btnName}
          className="bg-indigo-700 font-medium"
          width="w-full"
        />
        <Button
          onClick={() => {
            closeModal();
          }}
          Name="Cancel"
          className="bg-red-700 font-medium"
          width="w-full"
        />
      </div>
    </form>
  );
}
export default Form;
