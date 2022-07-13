const ItemsRow = ({row, items, handleClick}) => {
    return ( 
        <div className={"row row-" + row}>
            {items.map((item) => (
                <div className={"row-item row-item-" + item.id} key={item.id} style={{width: "calc(" + item.width + " - 2px)"}} onClick={() => handleClick(item.link)}>
                    <div className="row-item-container">{item.name}</div><span className="row-item-border"></span>
                </div>
            ))}
        </div>
    );
}
 
export default ItemsRow;