import { useState } from "react";
import Header from "./Header";
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import image from "../Assets/Images/03.jpg";

function Consulting() {

    const [header, setHeader] = useState({text: "Consulting", color: "#C0877C"});
    const [text, setText] = useState("Votre restaurant ou entreprise est en difficulté ? Vous souhaitez redéfinir l’identité culinaire de votre établissement ? Vous voulez réactualiser votre carte grâce à de nouvelles recettes et de nouveaux fournisseurs ?\n\nAvec ses collaborateurs, le chef Anthony Foret vous accompagne et vous conseille à court, moyen et long terme en fonction de votre demande et des besoins de l’entreprise.\n\n→ Refonte de votre identité culinaire\n→ Réactualisation de votre carte grâce à de nouvelles recettes\n→ Mise en relation avec de nouveaux fournisseurs");

    return (  
        <div className="Consulting">
            <Header header={header} />
            <TextContainer text={text} />
            <ImageContainer srcImage={image} />
        </div>
    );
}
 
export default Consulting;