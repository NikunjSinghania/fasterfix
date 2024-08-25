import Logo from '../../Logo-removebg-preview.png'
import '../../Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <a id="navLogoContainer" href="/">
                    <img src={Logo} alt="Logo" />
                </a>
                <div id="navLinksContainer">
                    <a href="#">
                        Home
                    </a>
                    <a href="#">
                        About Us
                    </a>
                    <a href="#">
                        Products
                    </a>
                </div>
                <div id="navContactLink">
                    <a href="#">
                        Contact Us
                    </a>
                </div>
            </nav>
        </>
    )
}
export default Navbar;