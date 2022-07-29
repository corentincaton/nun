import Header from "../Components/Header";
import TextContainer from "../Components/TextContainer";
import useFetch from "../Hooks/useFetch";

const HookTest = () => {
    const {loading, error, data} = useFetch("http://localhost:1337/api/menu");

    if (loading) {return (<TextContainer text="Loading..." />)}
    if (error) {return (<TextContainer text="Impossible to load data." />)}

    const menu = data.data.attributes;
    console.log(data);
    return (
        <div className="Menu">
            <Header header={{text: `${menu.Title}`, color: "#FC7065"}} />
            <h3>{menu.Header}</h3>
            <div className="split-section">
                <div className="left">
                    <div className="info">
                        <h4>{menu.IngredientHeader}</h4>
                        {menu.IngredientList.split(", ").map((ingredient, index) => (
                            <p key={index}>{ingredient}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HookTest;