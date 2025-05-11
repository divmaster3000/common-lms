import {
  Button as ChakraButton,
  type ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

type ButtonVariant = "contained" | "outlined" | "text";
type ButtonSize = "small" | "medium" | "large";
type ButtonStylesType = "primary" | "secondary" | "error";

const sizeMap: Record<ButtonSize, ChakraButtonProps["size"]> = {
  small: "sm",
  medium: "md",
  large: "lg",
};

const variantMap: Record<ButtonVariant, ChakraButtonProps["variant"]> = {
  contained: "solid",
  outlined: "outline",
  text: "ghost",
};

type ButtonProps = Omit<ChakraButtonProps, "size" | "variant"> & {
  type?: "primary" | "secondary" | "error";
  size?: ButtonSize;
  variant?: ButtonVariant;
};

function mapResponsiveValue<TFrom extends string, TTo>(
  value: TFrom | undefined,
  map: Record<TFrom, TTo>
): TTo | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return map[value as TFrom];
  if (Array.isArray(value))
    return value.map((v) => (v ? map[v as TFrom] : null));
  if (typeof value === "object") {
    const result: any = {};
    for (const key in value) {
      result[key] = map[value[key] as TFrom];
    }
    return result;
  }
  return undefined;
}

export const Button = (props: ButtonProps) => {
  const { size, variant, ...rest } = props;

  const currentSize = mapResponsiveValue(size, sizeMap);
  const currentVariant = mapResponsiveValue(variant, variantMap);

  return <ChakraButton size={currentSize} variant={currentVariant} {...rest} />;
};
