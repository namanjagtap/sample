import React from "react"
import coverImg from "./Images/coverImage.jpg"


export default function NavSection(){
    return (
        <div className="navSection">
            <img src={coverImg} className="coverImage" alt="Cover" />
            <div className="navBar">
                <a href="/">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#animalHusbandry">Diseases</a>
                <a href="#chatSection">Connect</a>
                <a href="#weather">Weather</a>
            </div>
        </div>
    )
}