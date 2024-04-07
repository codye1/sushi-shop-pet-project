import { useDispatch } from "react-redux";
import "./SearchBlock.css"
import { setSearchActive, setSearchInput } from "../../../reducer/search";
import search from "../../../icons/headerIcon/search.png"
import closeWhite from "../../../icons/close-white.svg"

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

                        <img src={search} alt="" />
                        <input onChange={(event)=>{changeInput(event.target.value)}} type="text" defaultValue={""} placeholder="Пошук"/>
                    </div>
                    <button onClick={()=>{dispatch(setSearchActive(false))} }>
                        <img src={closeWhite} alt="" />
                    </button>
                </div>
            </div>
    );
};

export default SearchBlock;