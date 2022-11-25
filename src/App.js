import React from "react"
import NavSection from "./navSection"
import Husbandry from "./husbandry"

export default function App(){
    return(
        <>
            <NavSection />
            <h2 style={{fontSize:"32px"}}>Animal Husbandry related diseases and their symptoms</h2>
            <Husbandry />
        </>
    )

}