import { useEffect } from "react";

function Navigation() {
  useEffect(() => {
    const onScroll = (e: Event) => {
      // do something when scrolling
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  // component logic
}
