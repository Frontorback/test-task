import React from "react";
import logo from "../../img/logo.svg"
import twitter from "../../img/twitter.svg"
import twitch from "../../img/twitch.svg"
import facebook from "../../img/facebook.svg"
import vk from "../../img/vk.svg"
import "./Header.scss"

const Header = () =>{
    return (
        <header>
            <div className="header-block">
            <img className="logo" src={logo} alt="logo" />
            <ul>
                <li>
                    <a href="#ss">
                        <img src={twitter} alt="twitter"/>
                    </a>
                </li>
                <li>
                    <a href="#ss">
                        <img src={twitch} alt="twitch"/>
                    </a>
                </li>
                <li>
                    <a href="#ss">
                        <img src={facebook} alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a href="#ss">
                        <img src={vk} alt="vk"/>
                    </a>
                </li>
                </ul>
            </div>
            <div className="border"></div>
        </header>
    )

}
export default Header