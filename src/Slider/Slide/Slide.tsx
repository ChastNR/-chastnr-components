import classNames from "clsx";

interface SlideProps {
  active?: boolean;
}

const Slide: React.FC<SlideProps> = ({ children, active }) => {
  const slideClassNames = classNames("sldr__wrp__slide", {
    active,
  });

  return (
    <li className={slideClassNames}>
      <div>
        <div>
          <div>
            <section>{children}</section>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Slide;
