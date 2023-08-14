import { useState } from "react"
import Logo from "../assets/images/logo.svg"
import { FiX , FiMenu } from "react-icons/fi";
import './Header.css'

const Header = () => {
    const [click ,setClick] = useState<boolean>(false);
    const handleClick = () => setClick(!click);

  return (
<div className="header">
    <div className="container">
        <div className="header-con">
            <div className="logo-con">
                <img src={Logo} alt="logo"/>
            </div>
            <ul className={click ? "menu active":"menu"}>
                <li><a href="$">Home</a></li>
                <li><a href="$">How tere works</a></li>
                <li><a href="$">Tere benefits</a></li>
                <li><a href="$">Help Center</a></li>
            </ul>
            <div className="mobile-icon" onClick={handleClick}>
                {click ? <FiX/> : <FiMenu/>}
            </div>
        </div>
    </div>
</div>
  )
}

export default Header