
import Breadcrumb from "../../../components/UI/Breadcrumb/Breadcrumb";
import Card from "../../../icons/Delivery/card.svg";
import Cash from "../../../icons/Delivery/cash.svg";
import DeliveryIcon from "../../../icons/Delivery/deliveryIcon.svg";
import Store from "../../../icons/Delivery/store.svg";
import Time from "../../../icons/Delivery/time.svg";
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
                                <img src={Cash} alt="" />
                            </div>
                            <p> Оплата готівкою кур'єру або в ресторані при отриманні замовлення.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Банківською карткою онлайн</h1>
                                <img src={Card} alt="" />
                            </div>
                            <p> При оформленні замовлення на сайті (сервіс доступний для карт: Visa, MasterCard)</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Банківською карткою при отриманні</h1>
                                <img src={Card} alt="" />
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
                                <img src={DeliveryIcon} alt="" />
                            </div>
                            <p> Замовляйте будь-яким зручним способом, отримуйте замовлення на вказану вами адресу. Здійснюємо безкоштовну доставку при замовленні понад 400 гривень. На замовлення менше ніж 400 гривень вартість доставки – 30 грн.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Забрати з ресторану</h1>
                                <img src={Store} alt="" />
                            </div>
                            <p> Отримуйте замовлення в обраному ресторані в зручний для вас час (замовлення може бути оформлене не менше ніж за 30 хв. до отримання).</p>
                        </div>
                        <div className="info-card">
                            <div className="info-head">
                                <h1>Доставка до певного часу</h1>
                                <img src={Time} alt="" />
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