function Header({header}) {
    return (  
        <div className="Header" style={{backgroundColor: header.color}}>
            <h2>{header.text}</h2>
        </div>
    );
}
 
export default Header;