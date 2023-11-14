import "./Header.css"

const Header = () => {
    return (
            <div className="header">
            <div className="top-header">
            <div className="top-container">
                    <div className="left-cont">
                        <div className="city">
                            Ужгород
                        </div>
                        <div className="language">
                            <span>UA</span>
                            <img src="https://uzhhorod.sushi-master.ua/img/header/arrow-down.svg" alt="" />
                        </div>
                        <div className="number">
                            982 874 443
                        </div>
                    </div>
                    <img className="main-logo" src="https://x100-venus-sm-ua.gumlet.io/VENUS/WEB/4C25DB70-1DCE-11EB-A6EC-7B643829D650/1675018701967_%D1%81%D0%B0%D0%B9%D1%82.svg?alt=media&token=a2835928-b794-4bd1-8b2c-7e722bd31b10" alt="" />
                    <div className="right-cont">
                        <div className="search">
                            <img src="https://uzhhorod.sushi-master.ua/img/header/search.svg" alt="" />
                        </div>
                        <div className="login">
                            <img src="https://uzhhorod.sushi-master.ua/img/header/user.svg" alt="" />
                            Увійти
                        </div>
                        <div className="basket">
                            <img src="https://uzhhorod.sushi-master.ua/img/header/cart.svg" alt="" />
                        </div>
                    </div>
            </div>

            </div>
            <div className="line"></div>
            <div className="navbar">
                Хуй
            </div>
        </div>
    );
};

export default Header;