declare const debounce: <P extends any[]>(func: (...args: P) => any, timeout: number) => (...args: P) => void;
export default debounce;
