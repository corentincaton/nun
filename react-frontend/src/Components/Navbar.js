import logo from "../Assets/Images/logo.svg";
import {Link} from "react-router-dom";

function Navbar() {
    return (  
        <div className="Navbar">
            <p>Newsletter</p>
            <h1>Local Kitchen</h1>
            <Link to="/"><img src={logo} alt="" /></Link>
        </div>
    );
}
 
export default Navbar;