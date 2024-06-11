import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createWrapperAndAppendToBody } from "./utils";

interface Props {
  wrapperId?: string;
}

const Portal: React.FC<PropsWithChildren<Props>> = ({
  children,
  wrapperId = "reactPortal",
}) => {
  const [wrapperElement, setWrapperElement] = useState<any>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element?.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export { Portal };
