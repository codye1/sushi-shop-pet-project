import { useDispatch } from "react-redux";
import "./SearchBlock.css"
import { setSearchActive, setSearchInput } from "../../../reducer/search";

const SearchBlock = () => {
    const dispatch = useDispatch()

    let inputTimeout:number;

    function changeInput(input:string){
        clearTimeout(inputTimeout)

        inputTimeout = setTimeout(function() {
            if(input.length<=0){
                dispatch(setSearchInput("null"));
            }else dispatch(setSearchInput(input));
        }, 1000);
    }


    return (
            <div className="search-page">
                <div className="search-input-button">

                    <div className="search-input">

                        <img src="https://lviv.sushi-master.ua/img/header/search.svg" alt="" />
                        <input onChange={(event)=>{changeInput(event.target.value)}} type="text" defaultValue={""} placeholder="Пошук"/>
                    </div>
                    <button onClick={()=>{dispatch(setSearchActive(false))} }>
                        <img src="https://uzhhorod.sushi-master.ua/img/header/close-white.svg" alt="" />
                    </button>
                </div>
            </div>
    );
};

export default SearchBlock;