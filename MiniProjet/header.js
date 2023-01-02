import React from "react";
import logo from "./logo.png"
export default function Header(){
    return (
        <header>
                <div className="logo"><img src={logo}></img></div>
                <div className="navBar">
                <a href="/">Home page</a>
                <a href="/contact">Contacts</a>
                <a href="/blog">Blogs</a>
                </div>
        </header>
    )
}