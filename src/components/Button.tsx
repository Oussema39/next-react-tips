"use client";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "flex align-middle justify-center font-semibold py-2 px-4 rounded-md border border-sky-600",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
      },
      colorScheme: {
        default: "bg-transparent text-sky-600 border-sky-600",
      },
      size: {
        default: "py-2 px-4",
        sm: "h-9 px-2 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size = "default",
      variant = "default",
      colorScheme = "default",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, colorScheme, className }))}
      {...props}
    />
  )
);

/**
   ({
    className,
    size = "default",
    variant = "default",
    colorScheme = "default",
    ...props
  }: ButtonProps) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, colorScheme, className })
        )}
        {...props}
      />
    );
  }
 */
export { Button, buttonVariants };
