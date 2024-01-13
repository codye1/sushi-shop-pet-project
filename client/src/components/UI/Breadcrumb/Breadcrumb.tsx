import { useLocation } from 'react-router-dom';
import './Breadcrumb.css';

interface Crumbs{
    crumbs: string[]

}

const Breadcrumb:React.FC<Crumbs> = ({crumbs}) => {
    const location = useLocation()

    const translateCrumb:{ [key: string]: string } ={
        ["sets"]:"Сети",
        ["roles"]:"Роли",
        ["promotion"]:"🔥Акції",
        ["promotions"]:"Акції",
        ["sushi"]:"Суші",
        ["california"]:"Каліфорнії",
        ["gourmetschoise"]:"🍣Вибір гурманів",
        ["hotsAndSalads"]:"Гаряче та салати",
        ["philadelphia"]:"Філадельфії",
        ["soups"]:"Супи",
        ["desserts"]:"Десерти",
        ["drinks"]:"Напої",
        ["addition"]:"Доповнення"
    }
    return (
            <div className='container'>
                <nav className='breadcrumbs'>
                    <ol className='d-flex align-center'>
                        <li className='breadcrumb'><a href="/home">Головна</a></li>
                        {crumbs.map((c,index)=>{
                            return index==crumbs.length-1? <li key={index}><strong>{translateCrumb[c]?translateCrumb[c]:c}</strong></li>:
                            <li key={index} className='breadcrumb'><a href={location.pathname.split("/")[1]=="menu"? `/menu/${c}`: "/promotions"}>{translateCrumb[c]?translateCrumb[c]:c}</a></li>
                        })}
                    </ol>
                </nav>
            </div>
    );
};

export default Breadcrumb;