import * as React from "react";

const useScroll = (ref: React.RefObject<HTMLElement>) => {
  const inToView = (options?: ScrollIntoViewOptions) =>
    ref.current?.scrollIntoView({
      behavior: "smooth",
      ...options,
    });

  return { inToView };
};

export default useScroll;
