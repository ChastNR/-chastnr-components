const mouseDownPrevent = (e: React.MouseEvent<any, MouseEvent>): void => {
  e.preventDefault();
  e.stopPropagation();
};

export default mouseDownPrevent;
