const parser = new DOMParser();

export function createDomElement<TElement extends HTMLElement>(
  html: string
): TElement {
  const element = parser.parseFromString(html, "text/html").body
    .firstElementChild as TElement | null;
  if (!element)
    throw new Error("HTML input string does not contain an element");
  return element;
}
