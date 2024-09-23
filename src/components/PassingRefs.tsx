import { RefObject } from "react";

type Props = {
  anchor: RefObject<HTMLElement>;
};

function Popover({ anchor }: Props) {
  // position component according to the anchor ref
}

// Tip: Generally speaking, I recommend using more universal types such as
// HTMLElement unless you need specific attributes or want to limit
// the API e.g.when building a component library.
// Why ? Because HTMLDivElement also satisfies HTMLElement, but HTMLSpanElement doesn't satisfy HTMLDivElement.
