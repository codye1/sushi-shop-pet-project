import { useEffect, useState } from "react";
import "./FilterModal.css"

interface FilterModal {
    onUpdateData: (newData: IformaFiltra) => void;
    ApplyFilters: () => void;
    ParentFormaFiltra:IformaFiltra
    labels:string[]
  }
export interface IformaFiltra{
    price:string
    weight:string
    labels:string[]
}

const FilterModal:React.FC<FilterModal> = ({onUpdateData,labels,ParentFormaFiltra,ApplyFilters}) => {
    const [modalTransition,setModalTransition] = useState(false)

    const [selectLabels,setSelectLabels]=useState<string[]>(ParentFormaFiltra.labels)

    const [formaFiltra] = useState<IformaFiltra>(ParentFormaFiltra)

    const [childFormaFiltra, setChildFormaFiltra] = useState<IformaFiltra>(ParentFormaFiltra);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setModalTransition(true);
        }, 0);

        return () => clearTimeout(timeoutId);
      }, []);

    const sendDataToParent = () => {
        onUpdateData(childFormaFiltra)
    };


    return (
        <div onClick={(event)=>{
                if((window.innerWidth-515)>event.clientX){
                    setModalTransition(false)
                    setTimeout(() => {
                    sendDataToParent();
                }, 300)
                }

        }} className="FilterModal">
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
                                } src="https://kyiv.sushi-master.ua/img/header/close.svg" alt="" />
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
                                                        <svg className="inner" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                                        <svg className="outer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>
                                                    </div>
                                                </span>
                                                <p>За замовчуванням</p>
                                        </label>
                                        <label  className="input-item" htmlFor="2">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.price=='2'}   type="radio"  id="2" name="price" />
                                                    <div className="input-inner-outer">
                                                        <svg className="inner" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                                        <svg className="outer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>
                                                    </div>
                                                </span>
                                                <p>Спочатку дешевше</p>

                                        </label>
                                        <label  className="input-item" htmlFor="3">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.price=='3'}     type="radio" id="3" name="price" />
                                                    <div className="input-inner-outer">
                                                        <svg className="inner" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                                        <svg className="outer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>
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
                                                        <svg className="inner" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                                        <svg className="outer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>
                                                    </div>
                                                </span>
                                                <p>За замовчуванням</p>

                                        </label>
                                        <label  className="input-item" htmlFor="5">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.weight=='5'}    type="radio" id="5" name="weight" />
                                                    <div className="input-inner-outer">
                                                        <svg className="inner" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                                        <svg className="outer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>
                                                    </div>
                                                </span>
                                                <p>Почнемо з тих, що легше</p>

                                        </label>
                                        <label  className="input-item" htmlFor="6">
                                                <span className="input-button">
                                                    <input defaultChecked={formaFiltra.weight=='6'}    type="radio" id="6" name="weight" />
                                                    <div className="input-inner-outer">
                                                        <svg className="inner" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                                        <svg className="outer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>
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
                    <div className="modal-submit-buttons d-flex space-between">
                         <div onClick={()=>{
                            formaFiltra.price="1"
                            formaFiltra.weight="4"
                            setChildFormaFiltra(formaFiltra)
                            setModalTransition(false)

                            formaFiltra.labels=[]
                            setTimeout(() => {
                                sendDataToParent();
                                ApplyFilters()
                            }, 300)
                        }
                        } className="button-cancel pointer btn align-center">
                            скинути
                         </div>
                         <div onClick={()=>{
                            setModalTransition(false)
                            formaFiltra.labels=selectLabels
                            setTimeout(() => {
                                sendDataToParent();
                                ApplyFilters()
                            }, 300)
                            }
                         } className="button-apply pointer btn">
                            застосувати
                         </div>
                    </div>
            </div>
        </div>
    );
};

export default FilterModal;