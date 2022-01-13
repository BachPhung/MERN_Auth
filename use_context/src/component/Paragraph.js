import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
export const Paragraph = () => {
    const context = useContext(ThemeContext)
    return (
        <div>
            <p className={context.theme?'light':'dark'} style={{width:'350px'}}>Context provides a way to pass data through the component tree
                without having to pass props down manually at every level
            </p>
        </div>
    )
}
