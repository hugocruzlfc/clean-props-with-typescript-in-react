import { ComponentProps } from "react";
import { Icon } from "./Icon";

type Props = {
  icon?: typeof Icon;
} & ComponentProps<"button">;

export function Button({ icon: Icon, children, ...props }: Props) {
  return (
    <button {...props}>
      {Icon && <Icon />}
      {children}
    </button>
  );
}
