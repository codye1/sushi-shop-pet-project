import { useState } from "react";
import CustomModal from "../../../../../../components/UI/CustomModal/CustomModal";
import picture from "../../../../../../icons/Personal/picture.svg"
import deleteIcon from "../../../../../../icons/Personal/delete.svg";
import Separator from "../../../../../../components/UI/Separator/Separator";
import "./ImageSection.css"
import { Area }  from 'react-easy-crop'
import TwoButtons from "../../../../../../components/UI/TwoButtons/TwoButtons";
import { useSaveImgMutation } from "../../../../../../API";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import {  updImg } from "../../../../../../reducer/auth";
import UploadFile from "./components/UploadFile/UploadFile";
import CropContainer from "./components/CropContainer/CropContainer";
import { useTranslation } from "react-i18next";
import { useCrop } from "./Crop";


const ImageSection = () => {
    const [modalUploadImgVissible,setModalUploadImgVissible] = useState(false)
    const [img,setImg] = useState<string>("")
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
    const [saveImg] = useSaveImgMutation()
    const dispatch = useAppDispatch()
    const imgUser = useAppSelector(state=>state.auth.user.img)
    const getCroppedImg = useCrop()
    const {t} = useTranslation()

    const croppAndSaveImg = async () => {
        try {
          const croppedImage = await getCroppedImg(
            img,
            croppedAreaPixels,
            0
          );
          if (croppedImage) {
            saveImg(croppedImage as string)
            dispatch(updImg(croppedImage as string))
          }
        } catch (e) {
          console.error(e);
        }
      }


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
                                {t("account.personal.sections.image.title")}
                                {imgUser && imgUser.length>0 &&
                                    <div onClick={()=>{
                                        saveImg("")
                                        dispatch(updImg(""))
                                        onCloseModal()
                                    }} className="delete-button d-flex space-between align-center">
                                        <img src={deleteIcon} alt="" />
                                        {t("account.personal.sections.image.delete-button")}
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
                                applyTitle={t("account.personal.sections.image.two-buttons-crop.applyTitle")}
                                cancelTitle={t("account.personal.sections.image.two-buttons-crop.cancelTitle")}
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

