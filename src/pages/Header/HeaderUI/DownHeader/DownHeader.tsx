import { NavLink } from "react-router-dom";
import SearchBlock from "../../../../components/UI/SearchBlock/SearchBlock";
import { useAppSelector } from "../../../../hooks";
import "./DownHeader.css"
interface IDownHeader{
    isScroled:boolean
}


interface Ilist{
    site: string;
    name: string;
}

type Tlist=Ilist[];

const DownHeader:React.FC<IDownHeader> = ({isScroled}) => {

    const down_list:Tlist=[
        {site: '/sets',name:"Сети"},
        {site: '/roles',name:"Роли"},
        {site: '/promotion',name:"🔥Акції"},
        {site: '/sushi',name:"Суші"},
        {site: '/california',name:"Каліфорнії"},
        {site: '/gourmetschoise',name:"🍣Вибір гурманів"},
        {site: '/hotsAndSalads',name:"Гаряче та салати"},
        {site: '/philadelphia',name:"Філадельфії"},
        {site: '/soups',name:"Супи"},
        {site: '/desserts',name:"Десерти"},
        {site: '/drinks',name:"Напої"},
        {site: '/additions',name:"Доповнення"},
    ]
    const searchActive = useAppSelector((state)=>state.searchActive.searchActive);
    return (
        <div>
            {searchActive?
            <div>
                <SearchBlock/>
            </div>
            :
            <div  className={`down-header ${isScroled ? 'scroled' : ''}`}>
                <div className="navbar-cont">
                    <div className="navbar">
                        {down_list.map((p)=><NavLink key={p.site} to={p.site} className={({isActive})=>isActive? "link linkact" : 'link'} >{p.name}</NavLink>)}
                    </div>
                </div>
            </div>
        }
        </div>


    );
};

export default DownHeader;