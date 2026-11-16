import * as React from "react";

/**
 * Minimal Slot implementation (subset of @radix-ui/react-slot) so components
 * can support `asChild` without pulling in the full Radix dependency tree.
 */
const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ...children.props,
        ref,
      } as React.HTMLAttributes<HTMLElement>);
    }
    return null;
  },
);
Slot.displayName = "Slot";

export { Slot };
