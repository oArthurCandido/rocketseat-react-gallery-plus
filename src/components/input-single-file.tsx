import React from "react";
import Icon from "./icon";
import { UploadFileIcon } from "../assets/icons";
import Text from "./text";
import { type VariantProps, tv } from "tailwind-variants";

export const inputSingleFileVariants = tv({
  base: `
    border border-solid border-border-primary w-full h-full flex items-center justify-center flex-col rounded-lg transition group-hover:border-border-active
    `,
  variants: {
    size: {
      md: "px-5 py-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const inputSingleFileIconVariants = tv({
  base: `fill-placeholder`,
  variants: {
    size: {
      md: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputSingleFileProps
  extends VariantProps<typeof inputSingleFileVariants>,
    Omit<React.ComponentProps<"input">, "size"> {}

const InputSingleFile = ({ size, ...props }: InputSingleFileProps) => {
  return (
    <div>
      <div className="relative w-full">
        <input
          type="file"
          className="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer"
          {...props}
        />
        <div className={inputSingleFileVariants({ size })}>
          <Icon
            svg={UploadFileIcon}
            className={inputSingleFileIconVariants({ size })}
          />
          <Text variant="label-medium" className="text-placeholder">
            Arraste o arquivo aqui <br /> ou clique para selecionar
          </Text>
        </div>
      </div>
    </div>
  );
};

export { InputSingleFile };
