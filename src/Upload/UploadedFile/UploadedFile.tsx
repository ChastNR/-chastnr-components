import classNames from 'clsx';
import { Close, RoundExclamation, RoundTick } from '../../base';
import { FileName } from '../FileName';
import { getFilenameAndExtension } from '../utils';

import './UploadedFile.scss';

interface IUploadedFileProps {
  file: File;
  accept?: string;
  onDeleteClick: (fileName: string) => void;
}

export const UploadedFile: React.FC<IUploadedFileProps> = ({ accept, file, onDeleteClick }) => {
  const [fileName, fileExtension] = getFilenameAndExtension(file.name);

  const isFileValid = !accept || accept.includes(fileExtension);

  const handleClick = () => onDeleteClick(file.name);

  const validationClassNames = classNames('upl__fl__cntr__vldt', {
    valid: isFileValid,
  });

  return (
    <li className="upl__fl">
      <div className="upl__fl__cntr">
        <div className={validationClassNames}>
          {isFileValid ? <RoundTick /> : <RoundExclamation />}
        </div>
        <FileName fileExtension={fileExtension} fileName={fileName} fileSize={file.size} />
        <button className="upl__fl__cntr__dlt__btn" onClick={handleClick} type="button">
          <Close />
        </button>
      </div>
    </li>
  );
};
