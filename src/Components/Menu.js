import { useState } from "react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";
import image from "../Assets/Images/06.jpg";

function Menu() {

    const [header, setHeader] = useState({text: "Le menu du mois", color: "#FC7065"});
    const [text, setText] = useState("Les huîtres aux poivrons");
    const [youtubeLink, setYoutubeLink] = useState("https://www.youtube.com/embed/ereeLT4eD0U");
    const [ingredientListHeader, setIngredientListHeader] = useState("Ingrédients");
    const [ingredientList, setIngredientList] = useState(["Huîtres", "Tomates", "Citron", "Parmesan", "Poivrons", "Piment d'espelette"]);

    return (  
        <div className="Menu">
            <Header header={header} />
            <ImageContainer srcImage={image} />
            <h3>{text}</h3>
            <div className="split-section">
                <div className="left">
                    <div className="info">
                    <h4>{ingredientListHeader}</h4>
                        {ingredientList.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="video-wrapper">
                        <iframe width="560" height="315" src={youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Menu;