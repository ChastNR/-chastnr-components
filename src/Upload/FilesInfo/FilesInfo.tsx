import { UploadedFile } from '../UploadedFile';

import './FilesInfo.scss';

interface IFilesInfoProps {
  accept?: string;
  info?: React.ReactNode;
  files: File[];
  onDeleteClick: (fileName: string) => void;
}

export const FilesInfo: React.FC<IFilesInfoProps> = ({ accept, files, info, onDeleteClick }) => (
  <div>
    <ul className="upl__fls">
      {files.map((file) => (
        <UploadedFile accept={accept} file={file} key={file.name} onDeleteClick={onDeleteClick} />
      ))}
    </ul>
    <div className="upl__info">{info}</div>
  </div>
);
