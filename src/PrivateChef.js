import { useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Picture from "./Picture";


function PrivateChef() {

    const [images, setImages] = useState(["./img/01.jpg", "./img/02.jpg"]);
    const [header, setHeader] = useState({text: "Chef Privé", color: "#40312E"});
    const [text, setText] = useState("Nun at home. Un chef à la maison pour vivre une expérience à domicile avec vos convives.");

    return (  
        <div className="PrivateChef">
            <Header header={header} />
            <Paragraph text={text} />
            <Picture srcImage={images[0]} />
            <Picture srcImage={images[1]} />
        </div>
    );
}
 
export default PrivateChef;