import './styles.css';
import { ReactComponent as Logo} from './logo.svg';

function NavBar(){
    return (
        <nav className="main-navbar">
            <Logo className="logo" />
            <a href="home" className="logo-text">DS Deliver</a>
        </nav>
    )
}

export default NavBar;