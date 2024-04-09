function EditingScreen() {
  return (
    <div className="absolute w-full m-0 bg-red-600 opacity-75 h-screen top-0">
      <form action="">
        <div>
          <label htmlFor="name">Product Name</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </div>
  );
}
export default EditingScreen;
