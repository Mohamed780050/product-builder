import Button from "./Button";
interface Iprops {
  closeModal: () => void;
}
function Form({ closeModal }: Iprops) {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" id="Title" name="Title" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" />
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={closeModal}
          Name="Edit"
          className="bg-indigo-700 font-medium"
          width="w-full"
        />
        <Button
          onClick={closeModal}
          Name="Cancle"
          className="bg-red-700 font-medium"
          width="w-full"
        />
      </div>
    </form>
  );
}
export default Form;
