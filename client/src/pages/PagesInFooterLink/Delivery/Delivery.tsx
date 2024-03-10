import Breadcrumb from "../../../components/UI/Breadcrumb/Breadcrumb";
import "./Delivery.css"


const Delivery = () => {

    return (
        <div>
            <Breadcrumb crumbs={["Безкоштовна доставка в Києві"]}/>
            <div className="d-flex">
                <div className="container column">
                    <div className="search-address-map">
                        <div className="search-address">
                            <h3>Умови доставки</h3>
                            <h4>Вкажіть адресу доставки або виберіть її на мапі для визначення часу очікування замовлення</h4>
                            <input type="text" />
                        </div>
                        <div className="delivery-map">
                            <div className="map">
                                тут типу карта
                            </div>
                            <div className="legend-wrapper">
                                <div >
                                    <div style={{backgroundColor:"rgb(146, 238, 126)"}}></div>
                                    <p>45 хв</p>
                                </div>
                                <div>
                                    <div style={{backgroundColor:"rgb(112, 163, 98)"}}></div>
                                    <p>60 хв</p>
                                </div>
                                <div>
                                    <div style={{backgroundColor:"rgb(81, 177, 186)"}}></div>
                                    <p>70 хв</p>
                                </div>
                                <div>
                                    <div style={{backgroundColor:"rgb(81, 92, 186)"}}></div>
                                    <p>80 хв</p>
                                </div>
                                <div>
                                    <div style={{backgroundColor:"rgb(231, 96, 93)"}}></div>
                                    <p>90 хв</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="container column">
                    <h1>Як оплатити замовлення?</h1>
                    <div className="delivery-info">
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Готівкою</h1>
                                <img src="https://kyiv.sushi-master.ua/img/delivery/cash.svg" alt="" />
                            </div>
                            <p> Оплата готівкою кур'єру або в ресторані при отриманні замовлення.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Банківською карткою онлайн</h1>
                                <img src="https://kyiv.sushi-master.ua/img/delivery/card.svg" alt="" />
                            </div>
                            <p> При оформленні замовлення на сайті (сервіс доступний для карт: Visa, MasterCard)</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Банківською карткою при отриманні</h1>
                                <img src="https://kyiv.sushi-master.ua/img/delivery/card.svg" alt="" />
                            </div>
                            <p> Оплата замовлення банківською карткою при отриманні кур'єру або в ресторані. Приймаються банківські картки MasterCard, Visa.

</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="container column">
                    <h1>Як отримати своє замовлення?</h1>
                    <div className="delivery-info">
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Доставка</h1>
                                <img src="https://kyiv.sushi-master.ua/img/delivery/delivery.svg" alt="" />
                            </div>
                            <p> Замовляйте будь-яким зручним способом, отримуйте замовлення на вказану вами адресу. Здійснюємо безкоштовну доставку при замовленні понад 400 гривень. На замовлення менше ніж 400 гривень вартість доставки – 30 грн.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Забрати з ресторану</h1>
                                <img src="https://kyiv.sushi-master.ua/img/delivery/store.svg" alt="" />
                            </div>
                            <p> Отримуйте замовлення в обраному ресторані в зручний для вас час (замовлення може бути оформлене не менше ніж за 30 хв. до отримання).</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Доставка до певного часу</h1>
                                <img src="https://kyiv.sushi-master.ua/img/delivery/time.svg" alt="" />
                            </div>
                            <p>Вибирайте “до певного часу”, отримуйте замовлення хвилина у хвилину. Замовлення можна оформити не менше ніж за 60 хв до часу доставки</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;