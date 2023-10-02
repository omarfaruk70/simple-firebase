import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
           <Link to={'/'}>Home</Link>
           <br />
           <br />
           <br />
           <br />
           <Link to={'/login'}>Log in</Link>
        </div>
    );
};

export default Header;