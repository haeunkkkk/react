import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function FirstSection(){
    const {isDark} = useContext(ThemeContext);
    

    return(
        <div className="content"
        style={
            {
                backgroundColor: isDark ? '#444' : '#f0f0f0',
                color: isDark? '#fff' : '#333'
            }
        }>
        <h2>첫번째 섹션</h2>
        </div>
    )
}

export default FirstSection