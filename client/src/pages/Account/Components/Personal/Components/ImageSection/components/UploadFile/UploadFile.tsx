import React, { FC  } from 'react';
import "./UploadFile.css"

interface UploadFile{
    setImg: (value: React.SetStateAction<string | undefined>) => void;
}

const UploadFile:FC<UploadFile> = ({setImg}) => {

    function uploadFileHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const fileReader = new FileReader();
          fileReader.readAsDataURL(event.target.files[0]);
          fileReader.onload = () => {
            setImg(fileReader.result as string)

          };
          fileReader.onerror = (error) => {
            console.log(error);
          }
        }

    }

    return (
        <div className="file-upload d-flex space-between column">
            <img src="https://uzhhorod.sushi-master.ua/img/account/personal/add-photo.svg" alt="" />
            <p>Перетащити фотографию сюда</p>
            <p>или</p>
            <div className="file-upload-button">
                ВЫБЕРИТЕ ФАЙЛ НА КОМПЬЮТЕРЕ
            </div>
            <input type="file" onChange={(event)=>{
                uploadFileHandler(event)}}/>
        </div>
    );
};

export default UploadFile;