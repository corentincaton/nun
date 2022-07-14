import logo from './logo.svg';
import {Link} from "react-router-dom";


function Navbar() {
    return (  
        <div className="Navbar">
            <p>Newsletter</p>
            <p className="description">Local Kitchen</p>
            <Link to="/"><img src={logo} alt="" /></Link>
        </div>
    );
}
 
export default Navbar;