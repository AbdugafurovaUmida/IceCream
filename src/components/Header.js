import {Link } from "react-router-dom";

function Header(){
    return(
        <div className='links'>
            <Link to="/">Home</Link>
            <img className='links__image' src="img/1584436631.png"/>
            <Link to="/add">Add Ice Cream</Link>
        </div>
        
    )
}
export default Header;