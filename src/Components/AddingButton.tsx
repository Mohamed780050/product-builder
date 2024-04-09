import { useState } from "react";
import Modules from "../Components/UI/Module";
function AddingButton() {
  const [isOpen, setIsOpen] = useState(true);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <header className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10  w-fit rounded-lg text-white px-3 py-3 duration-200 font-medium">
      <button onClick={openModal}>Add a product</button>
      <Modules
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        Title="Add a new Product"
      />
    </header>
  );
}
export default AddingButton;
