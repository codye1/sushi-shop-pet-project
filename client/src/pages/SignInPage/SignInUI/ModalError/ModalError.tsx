import "./ModalError.css"

interface ModalError{
    closeModal:React.Dispatch<React.SetStateAction<boolean>>
}

const ModalError:React.FC<ModalError> = ({closeModal}) => {

    const ignoreCloseModal = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
      };

    return (
        <div onClick={()=>{closeModal(false)}} className="modal-error">
            <div onClick={(event)=>{ignoreCloseModal(event)}} className="error">
                <img src="https://lviv.sushi-master.ua/img/header/cancel.svg" alt="" />
                <div className="title">Вибачте</div>
                <div className="description">Введено недійсний код</div>
                <img onClick={()=>{closeModal(false)}} className="close-modal" src="https://lviv.sushi-master.ua/img/header/close-white.svg" alt="" />
            </div>
        </div>
    );
};

export default ModalError;