import { useState } from "react";
import Header from "../Components/Header";
import TextContainer from "../Components/TextContainer";
import ImageContainer from "../Components/ImageContainer";
import image from "../Assets/Images/03.jpg";

function Consulting() {

    const [header, setHeader] = useState({text: "Chef Privé", color: "#C0877C"});
    const [text, setText] = useState("Fort de mon expérience à l’étranger dans les lieux les plus iconiques du monde la cuisine, je réalise des missions de consultant pour des restaurateurs partout en France.");

    return (  
        <div className="Consulting">
            <Header header={header} />
            <TextContainer text={text} />
            <ImageContainer srcImage={image} />
        </div>
    );
}
 
export default Consulting;