import {Link} from "react-router-dom";

const ItemsRow = ({row, items}) => {
    return ( 
        <div className={"row row-" + row}>
            {items.map((item) => (
                <Link to={"/" + item.link} className={"row-item row-item-" + item.id} key={item.id} style={{width: "calc(" + item.width + " - 2px)"}}>
                    <div className="row-item-container">{item.name}</div><span className="row-item-border"></span>
                </Link>
            ))}
        </div>
    );
}
 
export default ItemsRow;