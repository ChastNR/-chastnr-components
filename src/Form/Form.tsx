import classNames from 'clsx';

import './Form.scss';

interface FormProps {
  className?: string;
  title?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ className, children, title }) => {
  const formClassNames = classNames('frm', className);

  return (
    <div className={formClassNames}>
      <div>
        {title && (
          <div className="frm__title">
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Form;
