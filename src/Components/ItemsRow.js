import {Link} from "react-router-dom";

const ItemsRow = ({row, items}) => {

    let borderWidth = "2px";

    return ( 
        <div className={"row row-" + row}>
            {items.map((item) => (
                <Link to={"/" + item.link} className={"row-item row-item-" + item.id} key={item.id} style={{width: "calc(" + item.width + " - " + borderWidth + ")"}}>
                    <p>{item.name}</p><span className="row-item-border"></span>
                </Link>
            ))}
        </div>
    );
}
 
export default ItemsRow;