import { Tovar } from "../../../API";
import CardTovar from "../CardTovar/CardTovar";

type TovarLists={
    tovars:Tovar[]
}

const TovarList:React.FC<TovarLists> = ({tovars}) => {
    return (
        <div className="tovar-list">
            {tovars.map((t)=><CardTovar key={t.key} tovar={t}/>)}
        </div>
    );
};

export default TovarList;