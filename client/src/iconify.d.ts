import type { DetailedHTMLProps, HTMLAttributes } from "react";

// The Iconify web component (<iconify-icon>) is loaded via CDN in index.html.
// React 19 resolves intrinsic JSX elements against the `react` module's JSX
// namespace, so we augment that. (Augmenting the global `JSX` namespace — as
// the original inline declaration in Home.tsx did — is ignored under
// @types/react@19, which is why `tsc` reported TS2339 on every usage.)
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { icon: string },
        HTMLElement
      >;
    }
  }
}
