import { Dialog } from '@mui/material';
import './CustomModal.css';
import { ReactNode } from 'react';
import closeSVG from '../../../icons/close-white.svg';

interface ICustomModal {
  customModal: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const CustomModal = ({ customModal, closeModal, children }: ICustomModal) => {
  return (
    <Dialog
      open={customModal}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {children}
      <img
        onClick={closeModal}
        className="close-modal pointer"
        src={closeSVG}
        alt=""
      />
    </Dialog>
  );
};

export default CustomModal;
