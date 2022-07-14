import ItemsRow from "./ItemsRow";

function Home() {

    let firstRowItems = [
        {name: "Chef privé", link: "private-chef", id:1},
        {name: "Consulting", link: "consulting", id:2},
        {name: "", link: "", width: "", id:3}
    ];

    let secondRowItems = [
        {name: "", link: "", id:1},
        {name: "Pop-ups", link: "pop-ups", id:2},
        {name: "", link: "", id:3}
    ];

    let thirdRowItems = [
        {name: "", link: "", id:1},
        {name: "Le menu du mois", link: "menu", id:2},
        {name: "", link: "", id:3},
        {name: "À propos", link: "about", id:4},
    ];

    let fourthRowItems = [
        {name: "Les alliés", link: "partners", id:1},
        {name: "", link: "", id:2},
        {name: "Contact", link: "contact", id:3},
        {name: "", link: "", id:4},
    ];

    function handleClick(param) {
        console.log(param);
    }

    return (  
        <div className="Home">
            <ItemsRow row={1} items={firstRowItems} handleClick={handleClick} />
            <ItemsRow row={2} items={secondRowItems} handleClick={handleClick} />
            <ItemsRow row={3} items={thirdRowItems} handleClick={handleClick} />
            <ItemsRow row={4} items={fourthRowItems} handleClick={handleClick} />
        </div>
    );
}
 
export default Home;