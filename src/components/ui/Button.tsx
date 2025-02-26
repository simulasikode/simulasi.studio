import React, { ReactNode } from "react";
import Link from "next/link";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark";
type ButtonStyle = "filled" | "outlined" | "text";
type ButtonCategory = "next" | "previous";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  styleType?: ButtonStyle;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  category?: ButtonCategory;
  hasIcon?: boolean; // New prop:  Explicitly control icon visibility
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  styleType = "filled",
  href,
  className = "",
  onClick,
  disabled,
  target,
  rel,
  category = "next",
  hasIcon = true, //  Default to showing the icon
  ...props
}) => {
  const isLink = !!href;

  const baseClasses = `
    inline-flex
    items-center
    focus:outline-none
    transition-colors
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${className}
  `;

  const sizeClasses: Record<ButtonSize, string> = {
    small: "px-2 py-1  text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-8 py-3 text-lg",
  };

  const variantColors: Record<ButtonVariant, Record<ButtonStyle, string>> = {
    primary: {
      filled: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
      outlined:
        "text-blue-500 border border-blue-500 hover:bg-blue-50 focus:ring-blue-500",
      text: "text-blue-500 hover:text-blue-600 focus:ring-blue-500",
    },
    secondary: {
      filled: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
      outlined:
        "text-gray-500 border border-gray-500 hover:bg-gray-50 focus:ring-gray-500",
      text: "text-gray-500 hover:text-gray-600 focus:ring-gray-500",
    },
    success: {
      filled: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
      outlined:
        "text-green-500 border border-green-500 hover:bg-green-50 focus:ring-green-500",
      text: "text-green-500 hover:text-green-600 focus:ring-green-500",
    },
    warning: {
      filled:
        "bg-yellow-500 text-gray-900 hover:bg-yellow-600 focus:ring-yellow-500",
      outlined:
        "text-yellow-500 border border-yellow-500 hover:bg-yellow-50 focus:ring-yellow-500",
      text: "text-yellow-500 hover:text-yellow-600 focus:ring-yellow-500",
    },
    danger: {
      filled: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
      outlined:
        "text-red-500 border border-red-500 hover:bg-red-50 focus:ring-red-500",
      text: "text-red-500 hover:text-red-600 focus:ring-red-500",
    },
    info: {
      filled: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500",
      outlined:
        "text-sky-500 border border-sky-500 hover:bg-sky-50 focus:ring-sky-500",
      text: "text-sky-500 hover:text-sky-600 focus:ring-sky-500",
    },
    light: {
      filled: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500",
      outlined:
        "text-gray-100 border border-gray-100 hover:bg-gray-200 focus:ring-gray-500",
      text: "text-gray-100 hover:text-gray-200 focus:ring-gray-500",
    },
    dark: {
      filled: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500",
      outlined:
        "text-gray-700 border border-gray-700 hover:bg-gray-800 focus:ring-gray-500",
      text: "text-gray-700 hover:text-gray-800 focus:ring-gray-500",
    },
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantColors[variant][styleType]}`;

  const handleClick = () => {
    if (category === "previous") {
      window.history.back();
    }
    if (onClick) {
      onClick(); // Still call original onClick if provided
    }
  };

  if (isLink) {
    return (
      <Link href={href} className={buttonClasses} target={target} rel={rel}>
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          {...props}
          className={`w-full h-full p-0 flex items-center justify-center ${hasIcon ? "gap-2" : ""}`} //Flex properties
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
