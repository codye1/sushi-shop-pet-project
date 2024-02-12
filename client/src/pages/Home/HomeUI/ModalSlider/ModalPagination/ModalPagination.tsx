import { useSwiper } from "swiper/react";
import "./ModalPagination.css"

interface IModalPagination {
    idActiveSlide:number
}

const ModalPagination:React.FC<IModalPagination> = ({idActiveSlide}) => {
    const swiper = useSwiper();
        return(
            <div  className='modal-pagination'>
                <img onClick={()=>swiper.slidePrev()} src="https://kyiv.sushi-master.ua/img/custom/arrow-left.svg" alt="Arrow left" className="pointer"/>
                <div className='current'>
                    {idActiveSlide}
                    {" "}
                    з
                    {" "}
                    {swiper.slides.length}
                </div>
                <img onClick={()=>swiper.slideNext()} src="https://kyiv.sushi-master.ua/img/custom/arrow-right.svg" alt="Arrow right" className="pointer"></img>
            </div>
        );
};

export default ModalPagination;