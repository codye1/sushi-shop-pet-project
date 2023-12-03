import "./Home.css"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {  useGetSetsQuery } from "../../API";

import TovarList from "../../components/UI/TovarList/TovarList";
import { useState } from "react";

interface img{
    img: string;
    key: number;
}


const Home = () => {
    let slide:img[] =[
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/54D3EA71-A30D-11ED-B346-714A6D8F5A26-web.png?alt=media&token=e4daa0fc-5391-45c3-b496-14c15ac171f0&w=1280&h=600&format=png&mode=fit&q=59', key:1},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/7FAE3AB1-AC96-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=1a7f7060-0c4c-494b-a9d2-28627220f8a4&w=1280&h=600&format=png&mode=fit&q=59', key:2},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/1BB3F6C1-9E73-11ED-8B10-F7FE9622126C-web.png?alt=media&token=09fbe00a-864c-4ae8-9dda-31ba2e37b4a6&w=1280&h=600&format=png&mode=fit&q=59', key:3},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/51E77681-AC9D-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=198d5606-9c88-4744-b6a7-ca878f787f19&w=1280&h=600&format=png&mode=fit&q=59', key:4},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/2615EF71-ACA0-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=41d1354f-5d02-454a-92bd-225eb13eeb1e&w=1280&h=600&format=png&mode=fit&q=59', key:5},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/4028CB31-ACA5-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=20f76b3d-cdc9-449c-a769-11b26183fc1d&w=1280&h=600&format=png&mode=fit&q=59', key:6},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/BE2E88B0-ACA7-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=92ad1df6-ce3a-4194-a5b9-c79281ea9ae0&w=1280&h=600&format=png&mode=fit&q=59', key:7},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/FC578E21-9E42-11ED-B346-714A6D8F5A26-web.png?alt=media&token=6c4e4e14-20a0-40b6-8b76-8b6f3a109dd1&w=1280&h=600&format=png&mode=fit&q=59', key:8}
]

    const [aboutOpen,SetAboutOpen ]=useState(false)
    let {data,error,isLoading} = useGetSetsQuery()
    console.log(data);

    return (


        <div>
            <div className="home-slider">
                <div className="slider-cont">
                <Swiper
                    style={{ overflow: 'visible'}}
                    loop={true}
                    spaceBetween={80}
                    slidesPerView={1}
                    >
                    {slide.map((s)=>
                        <SwiperSlide key={s.key}><img src={s.img} alt="" /></SwiperSlide>
                    )}
                </Swiper>
                </div>
            </div>
            Доставка суші
            <div className="tovar">
                <div className="tovar-cont">
                    {data?<TovarList tovars={data}/>: <div>Ничего нет</div> }


                 </div>
                </div>
                <div className="banner-main-page">
                    <div className="banner-container">
                        <div className="banner">
                            <div className="banner-img">
                                <img src="https://uzhhorod.sushi-master.ua/img/get-mobile-app/phones-on-home-uk.png" alt="" />
                            </div>
                            <div className="banner-text">
                                <h1>Швидке замовлення улюбленої їжі зі зручним додатком!</h1>
                                <h2>Завантажуйте наш додаток, оформляйте замовлення в один клік і відстежуйте його статус у реальному часі.</h2>
                               <img src="https://uzhhorod.sushi-master.ua/img/get-mobile-app/app-store.svg" alt="" />
                                <img src="https://uzhhorod.sushi-master.ua/img/get-mobile-app/google-play.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-sushi-master">
                    <div className="about-sushi-master-container">
                        <div className="centered-cont">
                        <div className={`sushi-master ${aboutOpen?"aboutOpen":"aboutScroped"}`}>
                       <h1>Замовити суші від Sushi Master із доставкою додому в Києві</h1>
                       <p>Мережа ресторанів Sushi Master - це ваш путівник у світ паназіатської кухні. Ми пропонуємо велике меню суші, супів, локшини та інших японських страв, приготованих кращими майстрами-сушистами Києва. А завдяки швидкій і безкоштовній доставці (при замовленні на певну суму) в усі мікрорайони міста вам не доведеться довго чекати. Лише один дзвінок або кілька кліків на сайті чи в застосунку, і замовлення вже везуть до вас.</p>

    <h2>Найсмачніші суші в Києві: секрет нашого успіху</h2>
    <p>Компанія Sushi Master - це команда професіоналів, закоханих у свою справу. Ми обожнюємо паназіатську кухню, а також робимо все, щоб прищепити цю любов жителям Києва. Найкращі інгредієнти, найкращі кухарі та найкращі рецепти - така проста й очевидна комбінація гарантує клієнтам незабутні враження від наших страв.Ми використовуємо виключно свіжі продукти від перевірених постачальників. У руках досвідчених майстрів-сушистів екзотичні інгредієнти перетворюються на справжні шедеври, здатні подарувати вам і вашим близьким незабутнє гастрономічне задоволення. Ми цінуємо ваш час, тому працюємо оперативно на всіх етапах. Від оформлення замовлення до доставки - наші співробітники впораються з усім максимально швидко, щоб уже скоро ви змогли насолодитися смаком улюблених страв. Оскільки знайти ресторан "Суші Майстер" можна практично у всіх мікрорайонах міста (при цьому регулярно відкриваються нові точки), вам точно не доведеться довго чекати. </p>
<h2>Як замовити суші в Києві</h2>
<p>Ми пропонуємо клієнтам відразу кілька способів замовити хороші суші з можливістю доставки. Щоб поласувати топовими паназіатськими стравами, зв'яжіться з нами телефоном або онлайн:

за допомогою зручного онлайн-додатку;
просто на сайті.
Також оформити покупку можна, відвідавши найближчий до вас фірмовий ресторан. Ви знайдете точки Sushi Master у різних мікрорайонах міста, адже ми робимо все, щоб бути до вас максимально близько.</p>
<h2>Каталог наших страв</h2>
<p>Ресторан Sushi Master пропонує:

суші - у нас ви знайдете макі, унагі, Каліфорнію, Філадельфію, темпура та інші популярні види ролів (як окремі порції, так і сети на будь-яку компанію);
супи - густий і насичений смак місо припаде до душі всім, при цьому така їжа здатна надовго вгамувати голод, не завдавши шкоди фігурі;
гаряче і салати - ситні, поживні та пікантні паназіатські страви стануть як чудовим перекусом, так і прекрасним вибором для сімейної вечері;
десерти та напої тощо.
У каталозі є як традиційні рецепти, так і авторські страви - ми зможемо потішити навіть найвибагливіших гурманів. У меню регулярно з'являються новинки, тому в нашому асортименті ви завжди знайдете, чим побалувати себе або близьких.</p>

<h2>Швидка доставка по Києву</h2>
<p>Ми пропонуємо клієнтам не тільки найкращі суші в Києві, але також гарантуємо максимальний комфорт. Наша кур'єрська служба в стислі терміни доставить замовлення до вас додому або прямо в офіс. Якщо оформити замовлення на певну суму, ми привеземо його абсолютно безкоштовно. Оплатити все можна як під час отримання (картою або готівкою), так і під час покупки за допомогою банківського переказу. Доставка суші в Києві від нашої мережі ресторанів - це гарантія того, що ви вже скоро зможете насолодитися улюбленою паназіатською їжею.
Робіть замовлення наперед, і улюблені роли привезуть якраз до обіду або вечері. Опція "доставка в певний час" дає змогу отримати замовлення хвилина в хвилину. Також є можливість самовивозу з найближчого ресторану Sushi Master.

Купити хороші суші за вигідною ціною: широкий вибір акцій і бонусів
Клієнти нашої мережі ресторанів знайдуть не тільки найкращі ціни на страви паназіатської кухні, але також широкий вибір бонусних програм. Смачні та поживні суші недорого - з нашими закладами це більш ніж реально.
Ми пропонуємо:

щотижневі та щомісячні спецпропозиції;
широкий вибір акційних сетів;
подарунки для постійних клієнтів;
знижки до дня народження та інших свят тощо.
Sushi Master - це ще й вигідно!</p>

<h2>Чому саме Sushi Master</h2>
<p>Наша мережа ресторанів - це чудовий вибір як для досвідчених любителів японської кухні, так і для тих, хто тільки хоче долучитися до світу паназіатської кухні. Багатий асортимент, висока якість страв, оперативна доставка, доступні ціни - наші клієнти можуть розраховувати на ці та багато інших переваг. А головне, ми робимо все з душею, тому наші роли й виходять такими смачними. Оформляйте замовлення онлайн або телефоном просто зараз, і вже скоро зможете переконатися в цьому!</p>

                        </div>
                    <p className="sushi-master-button" onClick={()=>{aboutOpen?SetAboutOpen(false):SetAboutOpen(true)}}>
                        {aboutOpen? "Приховати" : "Детальніше"}
                    </p>
                        </div>

                    </div>

                </div>

            </div>
    );
};

export default Home;