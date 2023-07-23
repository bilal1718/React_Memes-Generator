import React from "react";
import headerImg from "../Images/meme.png"
export default function Header(){
    return (
        <header className="header">
            <img src={headerImg} className="headerImage" />
            <h2 className="headerTitle">Meme Generator</h2>
            <h4 className="headerProject">React Project - Project 3</h4>
        </header>
    )
}