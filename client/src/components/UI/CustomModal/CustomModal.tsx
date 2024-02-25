import { Dialog } from "@mui/material";
import "./CustomModal.css"
import {  FC, ReactNode, } from "react";

interface ICustomModal{
    customModal:boolean,
    closeModal:()=>void
    children:ReactNode

}

const CustomModal:FC<ICustomModal> = ({customModal,closeModal,children}) => {



    return (
        <Dialog
            open={customModal}
            onClose={closeModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
                <div className="custom-modal d-flex column center">
                    {children}
                    <img onClick={closeModal}  className="pointer" src="https://kyiv.sushi-master.ua/img/header/close-white.svg" alt="" />
                </div>
        </Dialog>
    );
};

export default CustomModal;