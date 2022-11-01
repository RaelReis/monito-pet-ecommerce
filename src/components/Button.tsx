import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "normal" | "fill";
}

const VARIANT_STYLE = {
  normal:
    "py-3 px-7 text-primary-base ring ring-primary-base rounded-full font-medium flex justify-center items-center gap-2",
  fill: "py-3 px-7 bg-primary-base text-neutral-100 ring ring-primary-base rounded-full font-medium flex justify-center items-center gap-2",
};

export function Button({ variant = "normal", children, className, ...props }: ButtonProps) {
  return (
    <button className={`${VARIANT_STYLE[variant]} ${className ? className : ""}`} {...props}>
      {children}
    </button>
  );
}
