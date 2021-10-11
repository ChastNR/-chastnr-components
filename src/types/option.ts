export interface Option<T = string | number> {
  className?: string;
  disabled?: boolean;
  title: React.ReactNode;
  value: T;
}
