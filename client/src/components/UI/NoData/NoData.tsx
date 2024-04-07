import "./NoData.css"
import empty from "../../../icons/empty.svg"

const NoData = () => {
    return (
        <div className="no-data d-flex center wrap column">
            <img src={empty} alt="" />
            <p>Тут поки немає даних</p>
        </div>
    );
};

export default NoData;