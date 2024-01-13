import Breadcrumb from "../../../components/UI/Breadcrumb/Breadcrumb";
import "./About.css"

const About = () => {
    return (
    <div>
        <Breadcrumb crumbs={["Про компанію"]}/>
        <div className="d-flex">
                <div className="container">
                    <div className="about-img">
                        <div className="about-container">
                            <div className="about-img-content">
                                <p className="content-title">Вітаємо <br/> в Sushi Master -</p>
                                <h3 className="content-text">
                                    міжнародній мережі ресторанів японської та паназійської кухонь.
                                </h3>
                                <h3  className="content-text">
                                    Якщо вам захотілося замовити доставку або забрати їжу з собою, ви за адресою.
                                </h3>
                            </div>
                        </div>
                    </div>
                <div className="about-many-bloks">
                    <img src="https://lviv.sushi-master.ua/img/about/many-ua.svg" alt="" />
                    <div className="many-bloks-container">
                        <div className="many-block">
                            <span  className="many-block-number"  >133</span>
                            <span  className="many-block-text"  >ресторанів</span>
                        </div>
                         <div className="many-block">
                            <span  className="many-block-number" >39</span>
                            <span  className="many-block-text" >міст</span>
                         </div>
                        <div className="many-block">
                            <span  className="many-block-number" >$34 млн</span>
                            <span  className="many-block-text" >продажу</span>
                        </div>
                        <div className="many-block">
                            <span  className="many-block-number" >1+ млн</span>
                            <span  className="many-block-text" >щасливих гостей</span>
                        </div>
                        <div className="many-block">
                            <span  className="many-block-number" >5+ млн</span>
                            <span  className="many-block-text" >скручених ролів</span>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        <div className="d-flex">
            <div className="dinamic">
                <div className="dinamic-content">
                    <p className="dinamic-text">
                        У зв'язку із збройною агресією Російської Федерації проти України кінцевим бенефіціарним власником міжнародної мережі Sushi Master Алексом Яновським, було прийнято рішення про відокремлення бізнесу в Російській Федерації шляхом відчуження об’єктів інтелектуальної власності особам, які виявили бажання супроводжувати ресторани швидкого харчування під брендом Sushi Master на території РФ. Ці особи не є пов’язаними ані з мережею, ані з Алексом Яновським особисто. Таким чином повідомляємо, що з початком військової агресії відбулося зменшення кількості закладів громадського харчування, які входять до міжнародної мережі Sushi Master, ресторани під брендом Sushi Master на території Російської Федерації мають інших власників та не входять в контур Холдингу, кінцевим бенефіціарним власником якого є Алекс Яновський. Алекс Яновський не отримує прибутків з території Російської Федерації і відповідно не сплачує жодних податків до бюджету країни-агресора. Натомість ми вирішили зосередитись на розвитку нашої мережі в України та інших країнах Європейського союзу та розширити географію наших задоволених клієнтів!
                    </p>
                </div>
            </div>
        </div>
        <div className="d-flex">
            <div className="container">

                <div className="reason-items-container">
                    <div className="reason-items">
                        <div className="reason-item">
                            <h1>Смачно</h1>
                            <p>Sushi Master кілька разів на місяць оновлює асортимент і поповнює його авторськими новинками , але залишається вірним традиційною рецептурою і технологій приготування. Від рису для суші до оригінальних рол сетів, салатів, солодощів і напоїв - все втілює в собі майстерність і ентузіазм наших команд.</p>
                        </div>
                        <div className="reason-item">
                            <h1>Вигідно</h1>
                            <p>Ми піклуємося про баланс ціни і якості. Тому постійно тішимо наших клієнтів новими подарунками, вводимо унікальні щомісячні та щотижневі акції, влаштовуємо конкурси і піклуємося про те, щоб у вас залишилися тільки приємні враження.</p>
                        </div>
                        <div className="reason-item">
                            <h1>Швидко</h1>
                            <p>Кожен співробітник команди Sushi Master знає, наскільки важливо скоротити очікування замовлення. Ми економимо ваш час на всіх етапах , від оформлення до доставки. А ще паралельно відкриваємо нові ресторани кожен тиждень, щоб улюблені суші були ще ближче.</p>
                        </div>
                    </div>
                    <div className="reason-items-img">
                        <img src="https://lviv.sushi-master.ua/img/about/chat-ua.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex">
            <div className="container">
                    <div className="benefits">
                        <h1>А що далі?</h1>
                        <div className="benefits-items-cont">
                            <div className="benefits-item">
                                <p className="benefits-item-title">Зручне замовлення</p>
                                <div>
                                    <div className="benefits-item-img">
                                        <img src="https://lviv.sushi-master.ua/img/about/icon-pose.svg" alt="" />
                                    </div>
                                    <div>
                                        Оформити можна будь-яким способом : через додаток, на сайті, по телефону або у ресторані
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item">
                                <p className="benefits-item-title">Свіжі продукти</p>
                                <div>
                                    <div  className="benefits-item-img">
                                        <img src="https://lviv.sushi-master.ua/img/about/icon-finger.svg" alt="" />
                                    </div>
                                    <div>
                                        Ми готуємо тільки зі свіжих інгредієнтів, які закуповуємо у надійних постачальників
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item">
                                <p className="benefits-item-title">Чистота і якість </p>
                                <div>
                                    <div  className="benefits-item-img">
                                        <img src="https://lviv.sushi-master.ua/img/about/icon-ok.svg" alt="" />
                                    </div>
                                    <div>
                                        Всі наші співробітники суворо дотримуються санітарних норм на робочих місцях
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item">
                                <p className="benefits-item-title"> Команда професіоналів</p>
                                <div>
                                    <div  className="benefits-item-img">
                                        <img src="https://lviv.sushi-master.ua/img/about/icon-love.svg" alt="" />
                                    </div>
                                    <div>
                                        Для вас готують кваліфіковані майстри суші, закохані в свою справ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="d-flex">
            <div className="about-footer">
                <div className="about-footer-container">
                    <div className="about-footer-text">
                            <h1>УРА! МОЄ ЗАМОВЛЕННЯ У МЕНЕ</h1>
                            <p>
                                А SUSHI MASTER ЧЕКАЄ НА ВАС ЗНОВУ в гості, тому як ми обожнюємо свою роботу, любимо кожного гостя і дуже хочемо, щоб величезна сім'я SUSHI MASTER була щаслива кожен день в будь-якій точці планети. А ви - стали її частиною.
                            </p>
                            <h2>ЦЕ НЕ ПРОСТО ЗАМОВЛЕННЯ , <br/> А ЩАСТЯ В КОЖНІЙ КОРОБОЧЦІ!</h2>
                    </div>
                    <div className="about-footer-img">
                        <img src="https://lviv.sushi-master.ua/img/about/sushi.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;