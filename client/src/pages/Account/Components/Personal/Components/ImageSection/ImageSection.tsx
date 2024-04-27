import { useState,  useCallback, } from "react";
import CustomModal from "../../../../../../components/UI/CustomModal/CustomModal";
import picture from "../../../../../../icons/Personal/picture.svg"
import deleteIcon from "../../../../../../icons/Personal/delete.svg";
import Separator from "../../../../../../components/UI/Separator/Separator";
import "./ImageSection.css"
import { Area }  from 'react-easy-crop'
import TwoButtons from "../../../../../../components/UI/TwoButtons/TwoButtons";
import getCroppedImg from "./Crop";
import { useSaveImgMutation } from "../../../../../../API";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import {  updImg } from "../../../../../../reducer/auth";
import UploadFile from "./components/UploadFile/UploadFile";
import CropContainer from "./components/CropContainer/CropContainer";


const ImageSection = () => {
    const [modalUploadImgVissible,setModalUploadImgVissible] = useState(false)
    const [img,setImg] = useState<string>()
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
    const [saveImg] = useSaveImgMutation()
    const dispatch = useAppDispatch()
    const imgUser = useAppSelector(state=>state.auth.user.img)

    const croppAndSaveImg = useCallback(async () => {
        try {
          const croppedImage = await getCroppedImg(
            img,
            croppedAreaPixels,
            0
          );
          console.log("donee", { croppedImage });
          if (croppedImage) {
            saveImg(croppedImage as string)
            dispatch(updImg(croppedImage as string))

          }
        } catch (e) {
          console.error(e);
        }
      }, [croppedAreaPixels, img]);


    function onCloseModal() {
        setImg("")
        setCroppedAreaPixels(undefined)
        setModalUploadImgVissible(false)
    }

    return (
        <div className="photo-section d-flex align-center">
            <img className="show-img" src={imgUser && imgUser.length>0? imgUser : picture} alt="" />
            <button className="pointer" onClick={()=>{setModalUploadImgVissible(true)}}>{imgUser && imgUser.length>0?"Редагувати ":"Додати "}фото</button>
            <CustomModal
                closeModal={onCloseModal}
                customModal={modalUploadImgVissible}
            >
                    <div className="modal-file-upload">
                        <div className="title d-flex space-between" >
                                Фото профиля
                                {imgUser && imgUser.length>0 &&
                                    <div onClick={()=>{
                                        saveImg("")
                                        dispatch(updImg(""))
                                        onCloseModal()
                                    }} className="delete-button d-flex space-between align-center">
                                        <img src={deleteIcon} alt="" />
                                        Видалити
                                    </div>
                                    }
                        </div>
                        <Separator/>
                        {img?
                           <>
                            <CropContainer
                                setCroppedAreaPixels={setCroppedAreaPixels}
                                img={img}
                            />
                            <TwoButtons
                                applyTitle="Зберегти"
                                cancelTitle="Скасувати"
                                onApply={()=>{
                                    croppAndSaveImg();
                                    onCloseModal()
                                }}
                                onCancel={onCloseModal}
                            />
                           </>
                            :
                               <UploadFile setImg={setImg}/>
                            }
                    </div>
            </CustomModal>
        </div>
    );
};

export default ImageSection;

