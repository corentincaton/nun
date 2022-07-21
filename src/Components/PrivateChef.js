import { useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ImageContainer from "./ImageContainer";
import firstImage from "../Assets/Images/01.jpg";
import secondImage from "../Assets/Images/02.jpg";

function PrivateChef() {

    const [header, setHeader] = useState({text: "Chef privé", color: "#40312E"});
    const [text, setText] = useState("Nun at home. Un chef à la maison pour vivre une expérience à domicile avec vos convives.");

    return (  
        <div className="PrivateChef">
            <Header header={header} />
            <Paragraph text={text} />
            <ImageContainer srcImage={firstImage} />
            <ImageContainer srcImage={secondImage} />
        </div>
    );
}
 
export default PrivateChef;