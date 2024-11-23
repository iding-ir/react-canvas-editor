export const getCssValue = ({
  element,
  key,
}: {
  element: HTMLElement;
  key: string;
}) => {
  return getComputedStyle(element).getPropertyValue(key);
};
