import { useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ImageContainer from "./ImageContainer";
import image from "../Assets/Images/08.jpg";

function Partners() {

    const [header, setHeader] = useState({text: "Les alliés", color: "#40312E"});
    const [text, setText] = useState("Artisans, paysans et éleveurs, ils contribuent à la qualité de l’expérience en fournissant des produits locaux de qualité…");

    return (  
        <div className="Partners">
            <Header header={header} />
            <Paragraph text={text} />
            <ImageContainer srcImage={image} />
        </div>
    );
}
 
export default Partners;