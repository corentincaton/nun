import { useState } from "react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";
import image from "../Assets/Images/07.jpg";
import Paragraph from "./Paragraph";

function About() {

    const [header, setHeader] = useState({text: "À propos", color: "#E96879"});
    const [text, setText] = useState("Anthony Foret, a grandi au Pays-basque lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.");
    const [youtubeLink, setYoutubeLink] = useState("https://www.youtube.com/embed/dexWs7urJtk");

    return (  
        <div className="About">
            <Header header={header} />
            <div className="video-wrapper">
                        <iframe width="560" height="315" src={youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="split-section">
                <div className="left">
                    <Paragraph text={text} />
                </div>
                <div className="right">
                    <ImageContainer srcImage={image} />
                </div>
            </div>
        </div>
    );
}
 
export default About;