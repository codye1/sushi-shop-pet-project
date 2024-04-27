import { Slider } from '@mui/material';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import "./CropContainer.css"

interface CropContainer{
    img:string
    setCroppedAreaPixels: Dispatch<SetStateAction<Area | undefined>>
}

const CropContainer:FC<CropContainer> = ({img,setCroppedAreaPixels}) => {

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
      }, []);


    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    return (
        <>
        <div className="crop-container">
            <Cropper
                image={img}
                crop={crop}
                zoom={zoom}
                aspect={200 / 200}
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

        </>
    );
};

export default CropContainer;