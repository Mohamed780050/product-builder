import { ButtonHTMLAttributes, ReactNode } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Name: string;
  className: string;
  width?: "w-full" | "w-fit";
  children?: ReactNode;
}
// here rest is an object that will contain the other props that you passed to Button component and that
function Button({
  Name,
  children,
  className,
  width = "w-full",
  ...rest
}: IProps) {
  return (
    <button
      className={`${className} ${width} text-white rounded-lg p-3`}
      {...rest}
    >
      {Name}
      {children}
    </button>
  );
}
export default Button;
