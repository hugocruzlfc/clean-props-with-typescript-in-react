import { ComponentProps } from "react";
import { ProductTile } from "./BasicProps";

type Props = {
  color: string;
} & ComponentProps<typeof ProductTile>;

// type ProductTileProps = ComponentProps<typeof ProductTile>;

// type Props = {
//   color: string;
// } & Pick<ProductTileProps, "title" | "description">;

export function ProminentProductTile1({ color, ...props }: Props) {
  return (
    <div style={{ background: color }}>
      <ProductTile {...props} />
    </div>
  );
}
