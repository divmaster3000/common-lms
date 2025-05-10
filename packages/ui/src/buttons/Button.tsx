import {
  Button as ChakraButton,
  type ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import type { ResponsiveValue } from "@chakra-ui/system";

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
  size?: ResponsiveValue<ButtonSize>;
  variant?: ResponsiveValue<ButtonVariant>;
};

export const Button = (props: ButtonProps) => {
  return <ChakraButton {...props} />;
};
