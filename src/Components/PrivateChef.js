import { useState } from "react";
import Header from "./Header";
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import firstImage from "../Assets/Images/01.jpg";
import secondImage from "../Assets/Images/02.jpg";

function PrivateChef() {

    const [header, setHeader] = useState({text: "Chef à domicile", color: "#ECA88A"});
    const [text, setText] = useState("Nun vous propose un service idéal pour un moment spécial, un événement particulier ou juste un diner en famille, entre amis, chez vous ou sur votre lieu de vacances. Qualité et savoir-faire seront au rendez-vous, vous pourrez profiter avec vos invités d’une expérience sur-mesure.\n\nA partir de ...€ / personne.");

    return (  
        <div className="PrivateChef">
            <Header header={header} />
            <TextContainer text={text} />
            <ImageContainer srcImage={firstImage} />
            <ImageContainer srcImage={secondImage} />
        </div>
    );
}
 
export default PrivateChef;