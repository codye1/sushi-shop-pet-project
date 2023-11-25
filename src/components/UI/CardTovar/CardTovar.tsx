import { Tovar } from "../../../API";
import "./CardTovar.css"

type Card={
    tovar:Tovar
}

const CardTovar:React.FC<Card>= ({tovar}) => {
    return (
        <div className={"card-tovar"}>
            <img className="card-photo" src={tovar.photo} alt="" />

        </div>
    );
};

export default CardTovar;