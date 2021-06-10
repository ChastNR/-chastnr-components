import "./Tab.scss";

interface TabProps {
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Tab: React.FC<TabProps> = ({ content, children, onClick }) => (
  <button
    className="tb__btn"
    onClick={onClick}
    style={{ cursor: onClick ? "default" : "unset" }}
    type="button"
  >
    <span className="tb__box" tabIndex={-1}>
      <span className="tb__txt">{children}</span>
      {content && <span className="tb__cnt">{content}</span>}
    </span>
  </button>
);

export default Tab;
