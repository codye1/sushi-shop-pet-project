import NoData from '../../../../components/UI/NoData/NoData';
import "./Bonuses.css"
const Bonuses = () => {
    return (
        <>
            <h1 className='top-title'>Бонуси</h1>
            <div className='bonuses-container'>
                <div className='bonuses-card d-flex space-between wrap'>
                    <h2>На рахунку</h2>
                    <p><span>0</span> Бонусів</p>
                    <a href="">Правила начислення</a>
                </div>

            </div>
            <div>
                <h1 className='top-title'>Історія</h1>
                <NoData/>
            </div>
        </>
    );
};

export default Bonuses;