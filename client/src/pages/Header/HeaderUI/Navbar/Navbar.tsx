import { NavLink } from "react-router-dom";
import SearchBlock from "../../../../components/UI/SearchBlock/SearchBlock";
import { useAppSelector } from "../../../../hooks";
import "./Navbar.css"
interface INavbar{
    isScroled:boolean
}


interface Ilist{
    site: string;
    name: string;
}

type Tlist=Ilist[];

const Navbar:React.FC<INavbar> = ({isScroled}) => {

    const down_list:Tlist=[
        {site: 'menu/sets',name:"Сети"},
        {site: 'menu/roles',name:"Роли"},
        {site: 'menu/promotion',name:"🔥Акції"},
        {site: 'menu/sushi',name:"Суші"},
        {site: 'menu/california',name:"Каліфорнії"},
        {site: 'menu/gourmetschoise',name:"🍣Вибір гурманів"},
        {site: 'menu/hotsAndSalads',name:"Гаряче та салати"},
        {site: 'menu/philadelphia',name:"Філадельфії"},
        {site: 'menu/soups',name:"Супи"},
        {site: 'menu/desserts',name:"Десерти"},
        {site: 'menu/drinks',name:"Напої"},
        {site: 'menu/addition',name:"Доповнення"},
    ]
    const searchActive = useAppSelector((state)=>state.searchActive.searchActive);
    return (
        <>
            {searchActive?
            <SearchBlock/>
            :
            <div  className={`navbar d-flex ${isScroled ? 'scroled' : ''}`}>
                <div className="container">
                    <div className="navbar-block">
                        {down_list.map((p)=><NavLink key={p.site} to={p.site} className={({isActive})=>isActive? "link selected" : 'link'} >{p.name}</NavLink>)}
                    </div>
                </div>
            </div>
        }
        </>


    );
};

export default Navbar;