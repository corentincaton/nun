import { useState } from "react";

import Header from "../Components/Header";
import TextContainer from "../Components/TextContainer";

function Contact() {

    const [header, setHeader] = useState({text: "Contact", color: "#C8A680"});
    const [text, setText] = useState("Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.");

    return (  
        <div className="Contact">
            <Header header={header} />
            <TextContainer text={text} />
            <div className="details">
                <p className="email">anthony.foret@gmail.com</p>
                <p className="phone">06.44.02.34.97</p>
            </div>
        </div>
    );
}
 
export default Contact;