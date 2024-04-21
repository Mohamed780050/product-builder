import { Dispatch, SetStateAction, ReactElement } from "react";
import Modules from "../Components/UI/Module";
import Form from "./UI/Form";
interface IPros {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  Content: ReactElement;
  setContent: Dispatch<SetStateAction<ReactElement>>;
  modulTitle: string;
  setModulTitle: (value: string) => void;
}
function AddingButton({
  isOpen,
  closeModal,
  openModal,
  Content,
  setContent,
  modulTitle,
  setModulTitle,
}: IPros) {
  return (
    <header className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10  w-fit rounded-lg text-white px-3 py-3 duration-200 font-medium">
      <button
        onClick={() => {
          setContent(<Form closeModal={closeModal} />);
          setModulTitle("Add a new Product");
          openModal();
        }}
      >
        Add a product
      </button>
      <Modules
        closeModal={closeModal}
        isOpen={isOpen}
        Title={modulTitle}
        Content={Content}
      />
    </header>
  );
}
export default AddingButton;
