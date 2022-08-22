import { Link } from 'react-router-dom';
import '../../styles/header_styles.css';
function Header() {
    return (
        <div className="content">
            <div className="header">
                <div className='menu'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='left'>
                                <div className='icon-phone'>
                                <a href='tel:123456'><i class="fa-solid fa-phone"></i></a>
                                </div>
                                <div className='info-phone'>
                                    <p>Need help?</p>
                                    <a href='tel:123456'>123 456 789</a>
                                </div>
                            </div>
                            <ul className="main navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/">test</Link>
                                        <Link className="dropdown-item" to="/">test</Link>
                                        <Link className="dropdown-item" to="/">test</Link>
                                    </div>
                                </li>
                                <li className="nav-item logo-page">
                                    <Link className="nav-link" to="/">BambooFood</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                </li>
                            </ul>
                            <div className='search searchBox'>
                                <input type="text" placeholder="Search products" onKeyPress={(event) => {
                                }} />
                            </div> 
                            <div className='right'>
                            <i class="fa-regular fa-user"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                            </div>        
                        </div>
                    </nav>    
                </div>
            </div>
        </div>
    );
  }
  
  export default Header;