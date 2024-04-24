import { useState, ChangeEvent, useEffect, useCallback, useRef} from "react";
import CustomModal from "../../../../../../components/UI/CustomModal/CustomModal";
import picture from "../../../../../../icons/Personal/picture.svg"
import Separator from "../../../../../../components/UI/Separator/Separator";
import "./ImageSection.css"
import Cropper, { Area }  from 'react-easy-crop'
import { Slider } from "@mui/material";
import TwoButtons from "../../../../../../components/UI/TwoButtons/TwoButtons";
import getCroppedImg from "./Crop";
import { useSaveImgMutation } from "../../../../../../API";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import {  updImg } from "../../../../../../reducer/auth";

const ImageSection = () => {
    const [modalUploadImgVissible,setModalUploadImgVissible] = useState(false)
    const [img,setImg] = useState<string>()
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
    const [saveImg] = useSaveImgMutation()
    const [rotation,setRotation]= useState(0)
    const dispatch = useAppDispatch()

    const imgUser = useAppSelector(state=>state.auth.user.img)

    function uploadFileHandler(event: ChangeEvent<HTMLInputElement>) {

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


    const onCropComplete = useCallback((croppedAreaPixels:Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
      }, []);


    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const showCroppedImage = useCallback(async () => {
        try {
          const croppedImage = await getCroppedImg(
            img,
            croppedAreaPixels,
            rotation
          );
          console.log("donee", { croppedImage });
          if (croppedImage) {
            saveImg(croppedImage as string)
            dispatch(updImg(croppedImage as string))
          }
        } catch (e) {
          console.error(e);
        }
      }, [croppedAreaPixels, rotation, img]);


    return (
        <div className="photo-section d-flex align-center">
            <img className="show-img" src={imgUser && imgUser.length>0? imgUser : picture} alt="" />
            <button className="pointer" onClick={()=>{setModalUploadImgVissible(true)}}>Додати фото</button>
            <CustomModal
                closeModal={()=>{setModalUploadImgVissible(false)}}
                customModal={modalUploadImgVissible}
            >
                    <div className="modal-file-upload">
                        <div className="title" >Фото профиля</div>
                        <Separator/>

                        {img?
                            <>
                            <div className="crop-container">
                                <Cropper
                                    image={img}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={200 / 200}
                                    rotation={rotation}
                                    onRotationChange={setRotation}
                                    cropShape="round"
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={onCropComplete}
                                />

                            </div>
                            <div className="continer-slider">
                                <Slider
                                    valueLabelDisplay="auto"

                                    aria-label="custom thumb label"
                                    defaultValue={0}
                                    min={1}
                                    max={5}
                                    step={0.1}
                                    value={zoom}
                                    onChange={(value,newvalue)=>{if (typeof newvalue == "number") {
                                        setZoom(newvalue)
                                    }
                                    }}

                                />


                            </div>
                            <TwoButtons
                                    applyTitle="Зберегти"
                                    cancelTitle="Скасувати"
                                    onApply={()=>{
                                        showCroppedImage();
                                        setModalUploadImgVissible(false)
                                        setImg("")
                                    }}
                                    onCancel={()=>{
                                        setModalUploadImgVissible(false)
                                        setImg("")
                                    }}
                                />
                            </>
                            :
                                <div className="file-upload d-flex space-between column">
                                    <img src="https://uzhhorod.sushi-master.ua/img/account/personal/add-photo.svg" alt="" />
                                    <p>Перетащити фотографию сюда</p>
                                    <p>или</p>
                                    <div className="file-upload-button">
                                        ВЫБЕРИТЕ ФАЙЛ НА КОМПЬЮТЕРЕ
                                    </div>
                                    <input type="file" onChange={(event)=>{
                                        console.log("1");
                                        uploadFileHandler(event)}}/>
                                </div>
                            }
                    </div>
            </CustomModal>
        </div>
    );
};

export default ImageSection;

