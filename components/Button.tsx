import { ReactNode } from "react";
import { Icon } from "./Icon";
import { Spinner } from "./Spinner";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "gold" | "grey" | "white" | "blue" | "blank";
  label: string | ReactNode;
  iconName?: string;
  loading?: boolean;
  iconClassName?: string;
  borderColor?: "white" | "black";
};

const colorMap = {
  gold: {
    bg: "bg-marigold",
    bgHover: "hover:bg-[#DCAE12]",
    loading: "bg-[#DCAE12]",
    text: "text-tight-black",
    spinnerColor: "purple",
  },
  grey: {
    bg: "bg-20-grey",
    bgHover: "hover:bg-[#E3E2E0]",
    loading: "bg-[#E3E2E0]",
    text: "text-tight-black",
    spinnerColor: "purple",
  },
  white: {
    bg: "bg-pure-white",
    bgHover: "hover:bg-pure-white-hover",
    loading: "bg-pure-white-hover",
    text: "text-tight-black",
    spinnerColor: "purple",
  },
  blue: {
    bg: "bg-teal",
    bgHover: "hover:bg-teal-hover",
    loading: "bg-teal-hover",
    text: "text-pure-white",
    spinnerColor: "white",
  },
  blank: {
    bg: "",
    bgHover: "",
    loading: "",
    text: "",
    spinnerColor: "purple",
  },
};

export function Button(props: ButtonProps) {
  const {
    type,
    label,
    color = "gold",
    loading = false,
    iconName,
    className,
    disabled,
    iconClassName,
    borderColor = "black",
    ...otherProps
  } = props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/classnames-order
      className={`Type-XL-Bold ${
        color === "blank" ? "" : "rounded-[5px] border-[1px]"
      } ${borderColor === "black" ? "border-tight-black" : "border-pure-white"} 
      px-[15px] py-[8px] ${colorMap[color].text} ${
        disabled ? "bg-20-grey" : colorMap[color].bg
      } ${!disabled ? colorMap[color].bgHover : ""}
      ${loading ? colorMap[color].loading : ""} 
      min-w-[150px] 
      ${className}`}
      disabled={disabled}
      {...otherProps}
    >
      <span className="inline-flex items-center truncate align-middle">
        {!loading && <span className="">{label}</span>}
        {!loading && iconName && (
          <Icon
            name={iconName}
            className={`ml-[10px] align-middle ${iconClassName ?? "text-3xl"}`}
          />
        )}
        {loading && (
          <Spinner
            className=""
            color={colorMap[color].spinnerColor as "white" | "purple"}
          />
        )}
      </span>
    </button>
  );
}
