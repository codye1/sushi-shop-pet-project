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
                    {children}
                    <img onClick={closeModal}  className="close-modal pointer" src="https://kyiv.sushi-master.ua/img/header/close-white.svg" alt="" />

        </Dialog>
    );
};

export default CustomModal;