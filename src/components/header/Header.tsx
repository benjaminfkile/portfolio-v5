import { FunctionComponent } from "react"
import HeaderBackground from "./header_background/HeaderBackground"
import "./Header.css"

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