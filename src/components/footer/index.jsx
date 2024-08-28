import "./styles.css"
import Youtube from "../../assets/images/youtube.svg"
import Twitter from "../../assets/images/twitter.svg"
import Linkedin from "../../assets/images/linkedIn.svg"
import Instagram from "../../assets/images/instagram.svg"
import Facebook from "../../assets/images/facebook.svg"
import Logo from "../../assets/images/logo.svg"

export default function Footer() {
    return (
        <footer>
            <div className="footerTop">
                <img className="footerLogo" src={Logo} alt="Logo" />
                <a href="#">Link One</a>
                <a href="#">Link Two</a>
                <a href="#">Link Three</a>
                <a href="#">Link Four</a>
                <a href="#">Link Five</a>
                <div className="footerSocials">
                    <a href="#"><img src={Facebook} alt="facebook" /></a>
                    <a href="#"><img src={Instagram} alt="instagram" /></a>
                    <a href="#"><img src={Twitter} alt="twitter" /></a>
                    <a href="#"><img src={Linkedin} alt="linkedin" /></a>
                    <a href="#"><img src={Youtube} alt="youtube" /></a>
                </div>
            </div>
            <div className="footerBottom">
                <p>© 2023 Relume. All rights reserved.</p>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Settings</a>
            </div>
        </footer>
    )
}