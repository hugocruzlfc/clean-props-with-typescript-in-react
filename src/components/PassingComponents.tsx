import { ComponentType } from "react";

type ProductTileProps = {
  title: string;
  description?: string;
};

type Props = {
  render: ComponentType<ProductTileProps>;
};

export function ProductTile3({ render }: Props) {
  // some logic to compute props
  const props: ProductTileProps = {
    title: "Example Title",
    description: "Example Description",
  };

  const RenderComponent = render;
  return <RenderComponent {...props} />;
}
