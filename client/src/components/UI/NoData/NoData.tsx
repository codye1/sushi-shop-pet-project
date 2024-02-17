import "./NoData.css"

const NoData = () => {
    return (
        <div className="no-data d-flex center wrap column">
            <img src="https://kyiv.sushi-master.ua/img/products/empty.svg" alt="" />
            <p>Тут поки немає даних</p>
        </div>
    );
};

export default NoData;