import { useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ImageContainer from "./ImageContainer";
import image from "../Assets/Images/06.jpg";



function Menu() {

    const [header, setHeader] = useState({text: "Le menu du mois", color: "#40312E"});
    const [text, setText] = useState("Les huîtres aux poivrons");
    const [ingredientListHeader, setIngredientListHeader] = useState("Tarifs");
    const [ingredientList, setIngredientList] = useState(["Huîtres", "Tomates", "Citron", "Parmesan", "Poivrons", "Piment d'espelette"]);

    return (  
        <div className="Menu">
            <Header header={header} />
            <ImageContainer srcImage={image} />
            <Paragraph text={text} />
            <div className="split-section">
                <div className="left">
                    <div className="ingredient-list">
                    <h3>{ingredientListHeader}</h3>
                    {ingredientList.map((item) => (
                        <p>{item}</p>
                    ))}
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}
 
export default Menu;