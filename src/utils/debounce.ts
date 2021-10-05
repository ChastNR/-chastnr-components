const debounce = <P extends unknown[]>(
  func: (...args: P) => unknown,
  timeout: number
): ((...args: P) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: P) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
};

export default debounce;
