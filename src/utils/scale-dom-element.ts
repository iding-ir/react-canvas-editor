export const scaleDomElement = ({
  element,
  scale,
}: {
  element: HTMLElement;
  scale: number;
}) => {
  element.style.scale = `${scale}`;
};
