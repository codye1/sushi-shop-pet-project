import { ILabels } from "../../../API";
import "./LabelsCard.css"

interface ILabelsCard{
    labels:ILabels[]
}

const LabelsCard:React.FC<ILabelsCard> = ({labels}) => {
    return (
        <div className="labels">
            {labels.map((p)=><div key={labels.indexOf(p)} className="lable" style={{color:p.color,backgroundColor:p.background}}>{p.title}</div>)}
        </div>
    );
};

export default LabelsCard;