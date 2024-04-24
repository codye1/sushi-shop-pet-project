
import "./Personal.css"
import NameSection from "./Components/NameSection/NameSection";
import EmailSection from "./Components/EmailSection/EmailSection";
import BirthSection from "./Components/BirthSection/BirthSection";
import Separator from "../../../../components/UI/Separator/Separator";
import ImageSection from "./Components/ImageSection/ImageSection";

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
            <ImageSection/>
        </>
    );
};

export default Personal;