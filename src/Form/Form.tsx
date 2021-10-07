import './Form.scss';

interface FormProps {
  title?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, title }) => (
  <div className="frm">
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

export default Form;
