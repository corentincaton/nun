import ItemsRow from "./ItemsRow";

function Main() {

    let firstRowItems = [
        {name: "Chef privé", link: "PrivateChef", id:1},
        {name: "Consulting", link: "Consulting", id:2},
        {name: "", link: "", width: "", id:3}
    ];

    let secondRowItems = [
        {name: "", link: "", id:1},
        {name: "Pop-ups", link: "PopUps", id:2},
        {name: "", link: "", id:3}
    ];

    let thirdRowItems = [
        {name: "", link: "", id:1},
        {name: "Le menu du mois", link: "Menu", id:2},
        {name: "", link: "", id:3},
        {name: "À propos", link: "About", id:4},
    ];

    let fourthRowItems = [
        {name: "Les alliés", link: "Partners", id:1},
        {name: "", link: "", id:2},
        {name: "Contact", link: "Contact", id:3},
        {name: "", link: "", id:4},
    ];

    function handleClick(param) {
        console.log(param);
    }

    return (  
        <div className="Main">
            <ItemsRow row={1} items={firstRowItems} handleClick={handleClick} />
            <ItemsRow row={2} items={secondRowItems} handleClick={handleClick} />
            <ItemsRow row={3} items={thirdRowItems} handleClick={handleClick} />
            <ItemsRow row={4} items={fourthRowItems} handleClick={handleClick} />
        </div>
    );
}
 
export default Main;