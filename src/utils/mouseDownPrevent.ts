export const mouseDownPrevent = (e: React.MouseEvent<Element, MouseEvent>): void => {
  e.preventDefault();
  e.stopPropagation();
};
