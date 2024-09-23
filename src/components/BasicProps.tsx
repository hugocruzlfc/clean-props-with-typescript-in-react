type Props = {
  title: string;
  description?: string;
};

export function ProductTile({ title, description }: Props) {
  return (
    <div>
      <div>{title}</div>
      {description && <div>{description}</div>}
    </div>
  );
}
