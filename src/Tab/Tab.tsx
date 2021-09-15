import classNames from "clsx";

import "./Tab.scss";

interface TabProps {
  className?: string;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Tab: React.FC<TabProps> = ({ className, content, children, onClick }) => {
  const tabClassNames = classNames("tb__btn", className);

  return (
    <button
      className={tabClassNames}
      onClick={onClick}
      style={{ cursor: onClick ? "cursor" : "unset" }}
      type="button"
    >
      <span className="tb__box" tabIndex={-1}>
        <span className="tb__txt">{children}</span>
        {content && <span className="tb__cnt">{content}</span>}
      </span>
    </button>
  );
};

export default Tab;
