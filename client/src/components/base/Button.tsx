import React from "react";
import { Link } from "react-router-dom";
import { ButtonSpinner } from "../../assets";

type Props = {
  text: string;
  type: "button" | "link";
  onClick?: () => void;
  theme?: "full" | "outline";
  icon?: React.ReactNode;
  destination?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Button = ({
  text,
  type,
  onClick,
  theme,
  icon,
  destination,
  isLoading,
  isDisabled,
}: Props) => {
  let classes;

  const base =
    "px-4 py-2 rounded-md text-sm transition duration-200 font-medium flex gap-2 items-center max-h-[40px]";

  const full =
    "bg-primary text-white border-2 border-primary hover:bg-secondary hover:text-white hover:border-secondary " +
    base;

  const outline =
    "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:border-secondary " +
    base;

  switch (theme) {
    case "full":
      classes = full;
      break;
    case "outline":
      classes = outline;
      break;
    default:
      classes = full;
  }

  const loading = classes + " cursor-not-allowed";

  const disabled =
    "bg-gray-200 text-gray-500 border-2 border-gray-200 cursor-not-allowed " +
    base;

  const normal = classes;

  const buttonClasses = isLoading ? loading : isDisabled ? disabled : normal;

  const buttonContent = (
    <>
      {isLoading ? <ButtonSpinner /> : icon}
      {text}
    </>
  );

  const button = (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {buttonContent}
    </button>
  );

  const link = (
    <Link
      className={buttonClasses}
      to={destination ? destination : "/"}
      target="_blank"
    >
      {buttonContent}
    </Link>
  );

  switch (type) {
    case "button":
      return button;
    case "link":
      return link;
    default:
      return button;
  }
};

export default Button;
