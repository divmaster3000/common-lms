import {
  Button as ChakraButton,
  type ButtonProps as ChakraButtonProps,
  defineRecipe,
  useRecipe,
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

const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    width: "100%",
    borderRadius: "8px",
  },
  variants: {
    visual: {},
    size: {
      sm: {
        height: "36px",
        padding: "7.5px 10px",
      },
      md: {
        height: "44px",
        padding: "10px 16px",
      },
      lg: {
        padding: "14px 22px",
        height: "52px",
      },
    },
  },
});

export const Button = (props: ButtonProps) => {
  const { size, variant, ...rest } = props;

  const currentSize = mapResponsiveValue(size, sizeMap);
  const currentVariant = mapResponsiveValue(variant, variantMap);
  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ size: currentSize });

  return <ChakraButton size={currentSize} variant={currentVariant} {...rest} />;
};
