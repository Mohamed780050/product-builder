interface IProps {
  ImageURL: string;
  alt: string;
  className: string;
}
function Image({ ImageURL, alt, className }: IProps) {
  return (
    <div className="overflow-hidden rounded-md">
      <img src={ImageURL} alt={alt} className={className} />
    </div>
  );
}
export default Image;
