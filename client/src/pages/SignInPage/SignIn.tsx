import { useState } from "react";
import "./SignIn.css"
import SigninSlideWriteNumber from "./SignInUI/SigninSlideWriteNumber/SigninSlideWriteNumber";
import SigninSlideWriteCode from "./SignInUI/SigninSlideWriteCode/SigninSlideWriteCode";




const SignIn = () => {
    const [smsSent,setSmsSent] = useState(false)
    const [number,setNumber]=useState<string>("")
    console.log(smsSent);


    return (
        <div className="sign-in d-flex">
            <div className="container">
                <div className="sign-in-main-block ">
                        <div className="sign-in-left-block d-flex">
                            <div className="sign-in-list-of-benefits">
                                <div className="benefits-list-item">
                                    <img src="https://lviv.sushi-master.ua/img/sign-in/location.svg" alt="" />
                                    <p>Зберігайте улюблені адреси</p>
                                </div>
                                <div className="benefits-list-item">
                                    <img src="https://lviv.sushi-master.ua/img/sign-in/history.svg" alt="" />
                                    <p>Дивіться історію замовлень</p>
                                </div>
                            </div>
                        </div>
                        {smsSent? <SigninSlideWriteCode number={number} setSmsSent={setSmsSent}/> : <SigninSlideWriteNumber setSMSSent={setSmsSent} setNumber={setNumber} number={number}/>}
                    </div>
            </div>
        </div>
    );
};

export default SignIn;