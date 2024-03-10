
import "./Personal.css"
import NameSection from "./Components/NameSection/NameSection";
import EmailSection from "./Components/EmailSection/EmailSection";
import BirthSection from "./Components/BirthSection/BirthSection";
import Separator from "../../../../components/UI/Separator/Separator";

const Personal = () => {


    return (
        <>
            <h1 className="top-title">Профіль</h1>
            <NameSection/>
            <Separator/>
            <EmailSection/>
            <Separator/>
            <BirthSection/>
            <Separator/>
            <div className="photo-section d-flex align-center">
                <img src="https://lviv.sushi-master.ua/img/account/personal/picture.svg" alt="" />
                <button>Додати фото</button>
            </div>
        </>
    );
};

export default Personal;