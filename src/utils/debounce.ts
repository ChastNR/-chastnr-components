const debounce = <P extends any[]>(
  func: (...args: P) => any,
  timeout: number
): ((...args: P) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: P) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
};

export default debounce;
