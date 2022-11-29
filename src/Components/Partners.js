import { useState } from "react";
import Header from "./Header";
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import image from "../Assets/Images/08.jpg";

function Partners() {

    const [header, setHeader] = useState({text: "Les alliés", color: "#F5A29E"});
    const [text, setText] = useState("Fiers de notre culture, et soucieux l’origine de nos produits, il nous est cher d’associer des producteurs locaux à notre savoir-faire. Nun s’engage à travailler des produits locaux et frais afin de vous offrir la meilleure expérience gustative.");

    return (  
        <div className="Partners">
            <Header header={header} />
            <TextContainer text={text} />
            <ImageContainer srcImage={image} />
        </div>
    );
}
 
export default Partners;