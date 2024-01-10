
import { ILabelsInXElement } from "../../../interfaces";
import "./LabelsCard.css"



const LabelsCard:React.FC<ILabelsInXElement> = ({labels}) => {
    return (
        <div className="labels">
            {labels.map((p)=><div key={labels.indexOf(p)} className="lable" style={{color:p.color,backgroundColor:p.background}}>{p.title}</div>)}
        </div>
    );
};

export default LabelsCard;