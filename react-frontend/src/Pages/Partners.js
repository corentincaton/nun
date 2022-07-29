import { useState } from "react";

import Header from "../Components/Header";
import TextContainer from "../Components/TextContainer";
import ImageContainer from "../Components/ImageContainer";
import image from "../Assets/Images/08.jpg";

function Partners() {

    const [header, setHeader] = useState({text: "Les alliés", color: "#F5A29E"});
    const [text, setText] = useState("Artisans, paysans et éleveurs, ils contribuent à la qualité de l’expérience en fournissant des produits locaux de qualité…");

    return (  
        <div className="Partners">
            <Header header={header} />
            <TextContainer text={text} />
            <ImageContainer srcImage={image} />
        </div>
    );
}
 
export default Partners;