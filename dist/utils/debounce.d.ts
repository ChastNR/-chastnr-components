declare const debounce: <P extends unknown[]>(func: (...args: P) => unknown, timeout: number) => (...args: P) => void;
export default debounce;
