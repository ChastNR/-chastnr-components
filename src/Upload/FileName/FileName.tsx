import { formatBytes } from '../utils';

import './FileName.scss';

interface IFileNameProps {
  fileName: string;
  fileExtension: string;
  fileSize: number;
}

export const FileName: React.FC<IFileNameProps> = ({ fileName, fileSize, fileExtension }) => {
  const formattedSize = formatBytes(fileSize);

  return (
    <div className="upl__fl__cntr__data">
      <span className="upl__fl__cntr__name">{fileName}</span>
      <span>.{fileExtension}</span>
      <span className="upl__fl__cntr__size">{formattedSize}</span>
    </div>
  );
};
