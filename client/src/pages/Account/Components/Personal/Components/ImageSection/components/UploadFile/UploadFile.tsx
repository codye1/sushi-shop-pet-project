import { SetStateAction, ChangeEvent } from 'react';
import './UploadFile.css';
import { useTranslation } from 'react-i18next';

interface IUploadFile {
  setImg: (value: SetStateAction<string>) => void;
}

const UploadFile = ({ setImg }: IUploadFile) => {
  function uploadFileHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = () => {
        setImg(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        console.log(error);
      };
    }
  }

  const { t } = useTranslation();

  return (
    <div className="file-upload d-flex space-between column">
      <img
        src="https://uzhhorod.sushi-master.ua/img/account/personal/add-photo.svg"
        alt=""
      />
      <p>{t('account.personal.sections.image.upload-file.title1')}</p>
      <p>{t('account.personal.sections.image.upload-file.title2')}</p>
      <div className="file-upload-button">
        {t('account.personal.sections.image.upload-file.button-title')}
      </div>
      <input
        type="file"
        onChange={(event) => {
          uploadFileHandler(event);
        }}
      />
    </div>
  );
};

export default UploadFile;
