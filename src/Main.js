function Main() {

    let items = [
        {name: "Chef privé", link: "PrivateChef", id:1},
        {name: "Consulting", link: "Consulting", id:2}
    ];

    function handleClick(param) {
        console.log(param);
    }

    return (  
        <div className="Main">
            <div className="row row-1">
                {items.map((item) => (
                    <div className={"row-item row-item-" + item.id} key={item.id} onClick={() => handleClick(item.link)}>{item.name}</div>
                ))}
            </div>
            <div className="row-item row-item-1"></div>
            <div className="row row-2"></div>
            <div className="row row-3"></div>
            <div className="row row-4"></div>
        </div>
    );
}
 
export default Main;