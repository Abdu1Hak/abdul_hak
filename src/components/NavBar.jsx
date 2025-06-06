import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"


function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/abdul-farooqi-056632326/"><FaLinkedin/></a>
                <a href="https://github.com/Abdu1Hak"><FaGithub/></a>
                <a href="https://www.instagram.com/abdul0hakeem1/"><FaInstagram/></a>
            </div>
        </nav>
    )
};
export default Navbar; 