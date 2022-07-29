import { useState } from "react";

import Header from "../Components/Header";
import TextContainer from "../Components/TextContainer";
import ImageContainer from "../Components/ImageContainer";
import firstImage from "../Assets/Images/01.jpg";
import secondImage from "../Assets/Images/02.jpg";

function PrivateChef() {

    const [header, setHeader] = useState({text: "Chef privé", color: "#ECA88A"});
    const [text, setText] = useState("Nun at home. Un chef à la maison pour vivre une expérience à domicile avec vos convives.");

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