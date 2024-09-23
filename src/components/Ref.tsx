import { useRef, ComponentProps } from "react";

function Button(props: ComponentProps<"button">) {
  const ref = useRef<HTMLButtonElement | null>(null);

  return (
    <button
      ref={ref}
      {...props}
    />
  );
}
