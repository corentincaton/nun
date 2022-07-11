import logo from './logo.svg';

function Navbar() {
    return (  
        <div className="Navbar">
            <p>Newsletter</p>
            <p className="description">Local Kitchen</p>
            <img src={logo} alt="" />
        </div>
    );
}
 
export default Navbar;