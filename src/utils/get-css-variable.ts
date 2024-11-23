export const getCssVariable = ({
  element,
  key,
}: {
  element: HTMLElement;
  key: string;
}) => {
  return getComputedStyle(element).getPropertyValue(key);
};
