function productValidtion(Prodcut: {
  Title: string;
  Description: string;
  ImgURL: string;
  Price: string;
}) {
  const photoReg = /(http:\/\/|https:\/\/)\w+/gi;
  const priceReg = /\d+/gi;
  const errors: {
    Title: string | boolean;
    Description: string | boolean;
    ImgURL: string | boolean;
    Price: string | boolean;
  } = {
    Title: false,
    Description: false,
    ImgURL: false,
    Price: false,
  };
  if (
    !Prodcut.Title.trim() ||
    Prodcut.Title.length < 10 ||
    Prodcut.Title.length > 80
  ) {
    errors.Title = "Product Title must be between 10 to 80 characters.";
  }
  if (
    !Prodcut.Description.trim() ||
    Prodcut.Description.length < 40 ||
    Prodcut.Description.length > 160
  ) {
    errors.Description =
      "Product Description must be between 10 to 80 characters.";
  }
  if (!Prodcut.ImgURL.trim() || !photoReg.test(Prodcut.ImgURL)) {
    errors.ImgURL = "Not a valid Image link";
  }
  if (!Prodcut.Price.trim() || !priceReg.test(Prodcut.Price)) {
    errors.Price = "Not a vild price";
  }
  console.log(errors);
  return errors;
}
export default productValidtion;
