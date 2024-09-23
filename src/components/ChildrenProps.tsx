import { PropsWithChildren } from "react";

type Props = {
  title: string;
};

export function ProductTile1({ title, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  );
}
