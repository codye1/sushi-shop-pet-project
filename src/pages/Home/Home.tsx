import "./Home.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useGetSetStartEndQuery } from "../../API";
import { useAppDispatch } from "../../hooks";

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


    let {data,error,isLoading} = useGetSetStartEndQuery({start:"1",end:"5"})
    console.log(data);

    return (


        <div>
            <div className="home-slider">
                <div className="slider-cont">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    style={{ overflow: 'visible'}}
                    loop={true}
                    spaceBetween={80}
                    slidesPerView={1}
                    navigation

                    pagination={{ clickable: true }}
                    >
                    {slide.map((s)=>
                        <SwiperSlide key={s.key}><img src={s.img} alt="" /></SwiperSlide>
                    )}
                </Swiper>
                </div>
            </div>

            <div className="container">
                <div>

                </div>

            </div>
        </div>
    );
};

export default Home;