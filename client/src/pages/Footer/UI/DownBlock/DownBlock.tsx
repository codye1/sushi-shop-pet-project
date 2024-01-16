import "./DownBlock.css"

const DownBlock = () => {
    return (
        <div className="down-block">
            <div className="left-block">
                <h1>© Sushi Master. Усі права захищені</h1>
                <img src="https://uzhhorod.sushi-master.ua/img/footer/visa-mastercard.svg"alt=""/>
                </div>
            <div className="right-block">
                <h1>Cайт розроблений з 💚  командою </h1>
                <div>
                    <span style={{color:"green"}}>IT</span>
                    <span>X100</span>
                </div>
            </div>
        </div>
    );
};

export default DownBlock;