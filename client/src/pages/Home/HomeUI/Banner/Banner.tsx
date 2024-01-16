import "./Banner.css"
const Banner = () => {
    return (
        <div className="banner-main-page d-flex">
            <div className="container">
                <div className="banner">
                    <div className="banner-img">
                        <img src="https://uzhhorod.sushi-master.ua/img/get-mobile-app/phones-on-home-uk.png" alt="" />
                    </div>
                     <div className="banner-text">
                        <h1>Швидке замовлення улюбленої їжі зі зручним додатком!</h1>
                        <h2>Завантажуйте наш додаток, оформляйте замовлення в один клік і відстежуйте його статус у реальному часі.</h2>
                        <div className="banner-icon">
                            <img src="https://uzhhorod.sushi-master.ua/img/get-mobile-app/app-store.svg" alt="" />
                            <img src="https://uzhhorod.sushi-master.ua/img/get-mobile-app/google-play.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;