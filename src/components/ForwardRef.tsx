import { forwardRef, ComponentProps, ForwardedRef } from "react";

import { Icon } from "./Icon";

type Props = {
  icon?: typeof Icon;
} & ComponentProps<"button">;

const Button = forwardRef(
  (
    { icon, children, ...props }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        {...props}
      >
        {icon && <Icon />}
        {children}
      </button>
    );
  }
);

const Button2 = forwardRef<HTMLButtonElement, Props>(
  ({ icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
      >
        {icon && <Icon />}
        {children}
      </button>
    );
  }
);

// Note: Forwarding refs will soon be a thing of the past!
// Once React 19 hits, refs will be forwarded automatically, with no need to wrap components in forwardRef anymore.
