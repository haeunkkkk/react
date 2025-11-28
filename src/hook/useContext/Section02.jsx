import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function FirstSection(){
    const {isDark, setIsDark} = useContext(ThemeContext);

    return(
        <div 
        className="content"
        style={
            {
                backgroundColor: isDark ? '#1f323aff': '#cedce9ff',
                color: isDark ? '#fff' : '#333' ,
            }
        }
        >
        <h2>두번째 섹션</h2>
        <button onClick={()=> setIsDark(!isDark)}>모드전환</button>
        </div>
    )
}

export default FirstSection