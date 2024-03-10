import { useSwiper } from "swiper/react";
import "./ModalPagination.css"
import arrowRight from "../../../../../icons/arrow-right.png"
import arrowLeft from "../../../../../icons/arrow-left.png"

interface IModalPagination {
    idActiveSlide:number
}

const ModalPagination:React.FC<IModalPagination> = ({idActiveSlide}) => {
    const swiper = useSwiper();
        return(
            <div  className='modal-pagination'>
                <img onClick={()=>swiper.slidePrev()} src={arrowLeft} alt="Arrow left" className="pointer"/>
                <div className='current'>
                    {idActiveSlide}
                    {" "}
                    з
                    {" "}
                    {swiper.slides.length}
                </div>
                <img onClick={()=>swiper.slideNext()} src={arrowRight} alt="Arrow right" className="pointer"></img>
            </div>
        );
};

export default ModalPagination;