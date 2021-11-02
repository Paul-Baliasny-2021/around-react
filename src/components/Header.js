import logo from '../images/logo.svg';

function Header(){
return (
    <div className="header">
        <img src={logo} alt="Around US logo" className="header__logo"/>
    </div>
)
}

export default Header;