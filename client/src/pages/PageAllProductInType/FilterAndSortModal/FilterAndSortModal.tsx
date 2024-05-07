import { useEffect, useState } from "react";
import "./FilterAndSortModal.css"
import TwoButtons from "../../../components/UI/TwoButtons/TwoButtons";
import close from "../../../icons/close.png"
import Inner from "../../../icons/Inner";
import Outer from "../../../icons/Outer";
interface FilterAndSortModal {
    onUpdateData: (newData: IFormFilterAndSort) => void;
    ApplyForm: () => void;
    ParentFormaFiltra:IFormFilterAndSort
    labels:string[]
  }
export interface IFormFilterAndSort{
    price:string
    weight:string
    labels:string[]
}

const FilterAndSortModal:React.FC<FilterAndSortModal> = ({onUpdateData,labels,ParentFormaFiltra,ApplyForm}) => {
    const [modalTransition,setModalTransition] = useState(false)

    const [selectLabels,setSelectLabels]=useState<string[]>(ParentFormaFiltra.labels)

    const [formaFiltra] = useState<IFormFilterAndSort>(ParentFormaFiltra)

    const [childFormaFiltra, setChildFormaFiltra] = useState<IFormFilterAndSort>(ParentFormaFiltra);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setModalTransition(true);
        }, 0);

        return () => clearTimeout(timeoutId);
      }, []);

    const sendDataToParent = () => {
        onUpdateData(childFormaFiltra)
    };

    function onCancel() {
        formaFiltra.price="1" //default value radio buttons
        formaFiltra.weight="4"
        setChildFormaFiltra(formaFiltra)
        setModalTransition(false)

        formaFiltra.labels=[]
        setTimeout(() => {
            sendDataToParent();
            ApplyForm()
        }, 300)
    }

    function onApply() {
        setModalTransition(false)
        formaFiltra.labels=selectLabels
        setTimeout(() => {
            sendDataToParent();
            ApplyForm()
        }, 300)

    }
    return (
        <div onClick={(event)=>{
                if((window.innerWidth-515)>event.clientX){
                    setModalTransition(false)
                    setTimeout(() => {
                    sendDataToParent();
                }, 300)
                }

        }} className="FilterAndSortModal">
            <div style={{transform:`${modalTransition? "none" : ""}`}} className="modal">
                    <div className="modal-form">
                            <div style={{margin:"0"}} className="modal-title d-flex space-between">
                                Фільтр і сортування
                                <img className="pointer" onClick={()=>{
                                    setModalTransition(false)
                                    setTimeout(() => {
                                        sendDataToParent();
                                    }, 300)
                                    }
                                } src={close} alt="" />
                            </div>
                            <div className="sort-price">
                                <fieldset onChange={(event)=>{
                                    const target = event.target as HTMLInputElement;
                                    formaFiltra.price = target.id
                                }}
                                >
                                    <div className="group-input">
                                        <label  className="input-item" htmlFor="1">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.price=='1'}   type="radio" id="1" name="price" />
                                                    <div className="input-inner-outer">
                                                        <Inner/>
                                                        <Outer/>
                                                    </div>
                                                </span>
                                                <p>За замовчуванням</p>
                                        </label>
                                        <label  className="input-item" htmlFor="2">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.price=='2'}   type="radio"  id="2" name="price" />
                                                    <div className="input-inner-outer">
                                                        <Inner/>
                                                        <Outer/>
                                                    </div>
                                                </span>
                                                <p>Спочатку дешевше</p>

                                        </label>
                                        <label  className="input-item" htmlFor="3">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.price=='3'}     type="radio" id="3" name="price" />
                                                    <div className="input-inner-outer">
                                                        <Inner/>
                                                        <Outer/>
                                                    </div>
                                                </span>
                                                <p>Спочатку дорожче</p>

                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="modal-weight d-flex column">
                                <div className="modal-title">
                                    По вазі
                                </div>
                                <fieldset onChange={(event)=>{
                                    const target = event.target as HTMLInputElement;
                                    formaFiltra.weight = target.id
                                }}>
                                    <div className="group-input">
                                        <label  className="input-item" htmlFor="4">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.weight=='4'}    type="radio" id="4" name="weight" />
                                                    <div className="input-inner-outer">
                                                        <Inner/>
                                                        <Outer/>
                                                    </div>
                                                </span>
                                                <p>За замовчуванням</p>

                                        </label>
                                        <label  className="input-item" htmlFor="5">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.weight=='5'}    type="radio" id="5" name="weight" />
                                                    <div className="input-inner-outer">
                                                        <Inner/>
                                                        <Outer/>
                                                    </div>
                                                </span>
                                                <p>Почнемо з тих, що легше</p>

                                        </label>
                                        <label  className="input-item" htmlFor="6">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.weight=='6'}    type="radio" id="6" name="weight" />
                                                    <div className="input-inner-outer">
                                                        <Inner/>
                                                        <Outer/>
                                                    </div>
                                                </span>
                                                <p>Давай спочатку тi, яких бiльше</p>

                                        </label>
                                    </div>
                                </fieldset>
                            <div className="modal-labels">
                                <div className="modal-title">
                                    Види
                                </div>
                                <div className="chips">
                                    {labels.map((t)=>selectLabels.indexOf(t)>=0?
                                        <div key={labels.indexOf(t)} className="chip pointer select">
                                            {t}
                                            <svg onClick={()=>{
                                                setSelectLabels(selectLabels.filter((p)=>p !== t))
                                                }} width="14px" height="14px" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#fff"></path></svg>
                                        </div>:
                                        <div onClick={()=>{setSelectLabels([...selectLabels,t])}} className="chip pointer"  key={labels.indexOf(t)}>{t}</div> )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <TwoButtons
                        applyTitle="ЗАСТОСУВАТИ"
                        cancelTitle="СКИНУТИ"
                        onApply={onApply}
                        onCancel={onCancel}
                    />
            </div>
        </div>
    );
};

export default FilterAndSortModal;