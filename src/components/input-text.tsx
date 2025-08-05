import React from "react";
import Icon from "./icon";
import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";

export const inputTextContainerVariants = tv({
  base: "flex flex-col gap-1",
});

export const inputTextWrapperVariants = tv({
  base: `
        border border-solid border-border-primary focus:border-border-active bg-transparent rounded flex items-center gap-3
    `,
  variants: {
    size: {
      md: "h-10 p-3",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

export const inputTextVariants = tv({
  base: `
  bg-transparent outline-none placeholder:text-placeholder text-accent-paragraph flex-1
  `,
});

export const inputTextIconVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputTextProps
  extends VariantProps<typeof inputTextWrapperVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  error?: React.ReactNode;
}

const InputText = ({
  size,
  disabled,
  className,
  icon,
  error,
  ...props
}: InputTextProps) => {
  return (
    <div className={inputTextContainerVariants({ className })}>
      <div className={inputTextWrapperVariants({ size, disabled })}>
        {icon && (
          <Icon className={inputTextIconVariants({ size })} svg={icon} />
        )}
        <input
          className={inputTextVariants()}
          disabled={disabled as boolean}
          {...props}
        />
      </div>
      {error && (
        <Text variant="label-small" className="text-accent-red">
          {error}
        </Text>
      )}
    </div>
  );
};

export default InputText;
