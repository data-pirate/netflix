import React from 'react'
import Links from './Links';
import Logo from './Logo';
import Search from './Search';
import "./styles.css";

const links = ["Home", "Movies", "Series", "DVD"];

function Header() {
    return (
        <div className="header">
            <Logo/>
            <div className="links">
            {
                links.map(each => <Links name = {each}/>)
            }
            </div>
            <Search/>
        </div>
    )
}

export default Header;
