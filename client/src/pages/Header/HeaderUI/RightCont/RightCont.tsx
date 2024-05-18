import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import { setSearchActive } from "../../../../reducer/search";
import "./RightCont.css"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {  Popover,} from "@mui/material";
import Menu from "../../../Account/Menu/Menu";
import searchPNG from "../../../../icons/headerIcon/search.png"
import userPNG from "../../../../icons/headerIcon/user.png"
import basketPNG from "../../../../icons/headerIcon/basket.png"
const RightCont = () => {
    const dispatch = useDispatch()
    const basket = useAppSelector((state)=>state.basket.basket)
    const [isAnimated,setIsAtimated]=useState(false);
    const isAuth=useAppSelector(state=>state.auth.isAuth)
    const number=useAppSelector(state=>state.auth.user.number)
    const name=useAppSelector(state=>state.auth.user.name)
    const imgUser = useAppSelector(state=>state.auth.user.img)
    useEffect(()=>{
        function setAnimatedWitchTimeout() {
            setIsAtimated(false)
        }
        setIsAtimated(true)
        setTimeout(setAnimatedWitchTimeout,600)
    },[basket])



    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    return (
        <div  className="right-cont">
            <div  onClick={()=>{
                dispatch(setSearchActive(true))
                } } className="search">
                <img src={searchPNG} alt="" />
            </div>
            {isAuth?
                <>
                    <button onClick={(event)=>{handleClick(event)}} className="login loged">
                        {imgUser && imgUser.length>0? <img className="user-logo" src={imgUser} alt="" />:<img src={userPNG} alt="" />}
                        {name && name.length>0? name : number}
                    </button>
                    <Popover
                        id={id}
                        open={open}
                        className="header-menu"

                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <Menu/>
                    </Popover>
                </>
                :
                <NavLink className="login unloged"to={"/sign-in"}>
                    <img src={userPNG} alt="" />
                    Увійти
                </NavLink>
            }
            <NavLink className="basket" to={"/basket"} >
                <img src={basketPNG} alt="" />
                {basket.length>0?
                <span className="number-product-in-basket-cont">
                    <span className={`number-product-in-basket ${isAnimated? 'animated': ''}`}>
                        {basket.length}
                    </span>
                </span>
                :null
                }
            </NavLink>
        </div>
    );
};

export default RightCont;