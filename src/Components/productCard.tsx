import { Dispatch, ReactElement, SetStateAction } from "react";
import Image from "./Image";
import Button from "./UI/Button";
import Form from "./UI/Form";
interface IProps {
  Title: string;
  discription: string;
  ImgURL: string;
  colors: string[];
  price: number;
  catagory: string;
  openModal: () => void;
  closeModal: () => void;
  setContent: Dispatch<SetStateAction<ReactElement>>;
  setModulTitle: (value: string) => void;
}
// eslint-disable-next-line react-refresh/only-export-components
let IDLIST = 0;
function ProductCard({
  Title,
  discription,
  ImgURL,
  colors,
  price,
  catagory,
  openModal,
  closeModal,
  setContent,
  setModulTitle,
}: IProps) {
  return (
    <div className="rounded-md border p-3 grid">
      <Image
        ImageURL={ImgURL}
        alt={Title}
        className="rounded-md ease-linear duration-500 hover:scale-105"
      />
      <h2 className="font-bold text-2xl mt-2">{Title}</h2>
      <p className="mb-2">
        {discription.length > 80
          ? `${discription.slice(0, 80)}...`
          : discription}
      </p>
      <ul className="flex space-x-1 mb-3">
        {colors.map((color) => (
          <li
            key={++IDLIST}
            style={{ backgroundColor: color }}
            className=" rounded-xl w-5 h-5"
          ></li>
        ))}
      </ul>
      <div className="flex justify-between items-center ">
        <span className="text-lg text-green-600">{price}$</span>
        <span className="flex items-center flex-row-reverse">
          <Image
            ImageURL={ImgURL}
            alt={Title}
            className="w-16 h-16 rounded-full ml-2 object-cover"
          />
          <span>{catagory}</span>
        </span>
      </div>
      {/* we used space-x instead of margin because when you will switch to Arabic you will change the dircation to rtl and the marign will work reversed */}
      <div className="flex items-center justify-between mt-5 space-x-3">
        <Button
          onClick={() => {
            setModulTitle("Eidit this product");
            setContent(
              <Form
                btnName="Edit"
                closeModal={closeModal}
                InputInfo={{
                  Title: Title,
                  Description: discription,
                  ImgURL: ImgURL,
                  Price: price,
                }}
              />
            );
            openModal();
          }}
          Name="Edit"
          className="bg-indigo-700 font-medium"
          width="w-full"
        ></Button>
        <Button
          onClick={() => {
            setModulTitle("Deleting this product");
            setContent(
              <div>
                <p className="mb-3">Are you sure</p>
                <button className="py-1 px-2 bg-red-600 text-white rounded-md duration-500 hover:bg-red-700">
                  OK!
                </button>
              </div>
            );
            openModal();
          }}
          Name="Remove"
          className="bg-red-700 font-medium"
          width="w-full"
        />
      </div>
    </div>
  );
}
export default ProductCard;
