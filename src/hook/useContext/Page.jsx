import FirstSection from "./Section01.jsx"
import SecondtSection from "./Section02.jsx"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


function Page(){
    return(
        <>
        <FirstSection />
        <SecondtSection />
        
        </>
    )
}

export default Page