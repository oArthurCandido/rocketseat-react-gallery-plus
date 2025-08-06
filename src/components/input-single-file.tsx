import React from "react";
import Icon from "./icon";
import { UploadFileIcon } from "../assets/icons";
import Text, { textVariants } from "./text";
import { type VariantProps, tv } from "tailwind-variants";
import { FileImageIcon } from "../assets/icons";

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
    Omit<React.ComponentProps<"input">, "size"> {
  error?: React.ReactNode;
}

const InputSingleFile = ({ size, error, ...props }: InputSingleFileProps) => {
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
      {error && (
        <Text variant="label-small" className="text-accent-red">
          Deu erro{error}
        </Text>
      )}
      <div className="flex gap-3 items-center border border-solid border-border-primary rounded mt-5 p-3">
        <Icon svg={FileImageIcon} className="h-6 -w-6 fill-placeholder" />
        <div className="flex flex-col">
          <Text variant="label-medium" className="text-placeholder">
            imagem_path.png
          </Text>
          <div className="flex">
            <button
              type="button"
              className={textVariants({
                variant: "label-small",
                className: "text-accent-red cursor-pointer hover:underline",
              })}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InputSingleFile };
