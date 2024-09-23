import { ProductTile } from "./BasicProps";

type Props = {
  color: string;
  title: string;
};

export function ProminentProductTile({ color, title }: Props) {
  return (
    <div style={{ background: color }}>
      <ProductTile title={title} />
    </div>
  );
}
