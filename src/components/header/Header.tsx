import { FunctionComponent } from "react"
import "./Header.css"
import HeaderBackground from "./header_background/HeaderBackground"

interface HeaderProps {
    
}

const Header: FunctionComponent<HeaderProps> = () => {//ci/cd bump
    return (
        <div className="Header">
            <HeaderBackground />
        </div>
    )
}

export default Header