import { useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ImageContainer from "./ImageContainer";
import firstImage from "../Assets/Images/04.jpg";
import secondImage from "../Assets/Images/05.jpg";

function PopUps() {

    const [header, setHeader] = useState({text: "Pop Ups", color: "#40312E"});
    const [text, setText] = useState("Nun crée des expériences culinaires uniques et temporaires. Une cuisine associée à des producteurs locaux et durables de la plus haute qualité pour offrir une expérience exceptionnelle à vos hôtes pendant des évènements (vernissage, soirée d’entreprise, etc).");
    const [priceListHeader, setPriceListHeader] = useState("Tarifs");
    const [priceList, setPriceList] = useState([{name: "Cocktail dinatoire", price: 10, id:1}, {name: "Plateau repas", price:14, id:2}, {name: "Buffet froid", price: 18, id:3}, {name: "Buffet froid", price: 20, id:4}]);
    const [priceLabel, setPriceLabel] = useState("€/pers.");

    return (  
        <div className="PopUps">
            <Header header={header} />
            <Paragraph text={text} />
            <div className="split-section">
                <div className="left">
                    <ImageContainer srcImage={firstImage} />
                    <div className="info">
                        <h4>{priceListHeader}</h4>
                        <table><tbody>
                        {priceList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}{priceLabel}</td>
                            </tr>
                        ))}
                        </tbody></table>
                    </div>
                </div>
                <div className="right"><ImageContainer srcImage={secondImage} /></div>
            </div>
        </div>
    );
}
 
export default PopUps;