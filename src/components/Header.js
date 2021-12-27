import{Link} from 'react-router-dom';

function Header(){
    return(
        <div className="navbar">
            <h1>Flicked</h1>
            <div className="nav-links">
            <Link to='/home'>Home</Link>
            <Link to='/create'>Create Article</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/'>Logout</Link>
            </div>
        </div>
    )
}
export default Header;