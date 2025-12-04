import { Fragment, ReactNode } from "react";

export function stylizeAmpersands(text: string): ReactNode[] {
  return text.split(/(&)/).map((segment, index) =>
    segment === "&" ? (
      <span key={`amp-${index}`} className="ampersand">
        &amp;
      </span>
    ) : (
      <Fragment key={`text-${index}`}>{segment}</Fragment>
    )
  );
}
