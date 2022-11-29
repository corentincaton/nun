import { useState } from "react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";
import image from "../Assets/Images/07.jpg";
import TextContainer from "./TextContainer";

function About() {

    const [header, setHeader] = useState({text: "À propos", color: "#E96879"});
    const [youtubeLink, setYoutubeLink] = useState("https://www.youtube.com/embed/dexWs7urJtk");

    return (  
        <div className="About">
            <Header header={header} />
            {/* <div className="video-wrapper">
                        <iframe width="560" height="315" src={youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> */}
            <div className="split-section">
                <div className="left">
                    <div className="TextContainer">
                        <p>
                            <span className="quote">« J’ai toujours aimé manger. Aujourd’hui j’aime manger et j’adore cuisiner. »</span>
                            <br/><br/>
                            Ma plus grande satisfaction est de procurer du plaisir aux personnes qui goutent ma cuisine. En effet, un bon repas fait avec passion et amour peut twister une journée plus ou moins fade et la rendre plus vivante.
                            <br/><br/><br/>
                            <b>Pourquoi le nom de « Nun local kitchen » ?</b>
                            <br/><br/>
                            <b>NUN</b> → « Où » en Basque, ma cuisine faisant écho au terroir de mon enfance.
                            <br/><br/>
                            <b>LOCAL</b> → Nun respecte la saisonnalité des produits et le lien humain avec les producteurs afin d’amener le consommateur à ressentir et partager des émotions. Nous avons la chance, chez nous au Pays Basque, d’être proche à la fois de la mer et de la montagne, ce qui procure une multitude de choix dans les produits.
                            <br/><br/>
                            <b>KITCHEN</b> → Riche de mon expérience dans des établissements français et étrangers tels que Le Georges V et Le Ritz à Paris, Le Kaiku à St Jean-de-Luz, Le Bennelong à Sydney, Noma à Coppenhague (…), j’ai peu à peu créé mon univers propre afin de pouvoir partager et transmettre aujourd’hui ma cuisine.
                            <br/><br/><br/>
                            <b>Food Entertainer</b>
                            <br/><br/>
                            A travers Nun, on peut retrouver différentes prestations autour de la « food ». Nun regroupe différents services sur-mesure pour se rapprocher au plus près de vos envies, vos besoins et vous faire partager un moment unique.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <ImageContainer srcImage={image} />
                </div>
            </div>
        </div>
    );
}
 
export default About;