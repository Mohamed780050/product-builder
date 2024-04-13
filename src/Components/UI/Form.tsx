import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";
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
  name: string;
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
function Form({ closeModal, btnName = "Add", InputInfo }: Iprops) {
  const [productData, setProductData] = useState({
    Title: "",
    Description: "",
    ImgURL: "",
    Price: 0,
  });
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
        colors: ["#ff2233"],
        catagory: "cat",
      }),
    });
  }
  return (
    <form className="space-y-3" action="" onSubmit={(e) => e.preventDefault()}>
      {Info.map((element) => (
        <Input
          element={element}
          defaultValue={
            InputInfo === undefined ? "" : InputInfo[`${element.name}`]
          }
          gettingDataFromTheinput={gettingDataFromTheinput}
        />
      ))}
      <div className="flex space-x-3">
        <Button
          onClick={async () => {
            await sendingToTheDatabase();
            closeModal();
            window.location.reload();
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
