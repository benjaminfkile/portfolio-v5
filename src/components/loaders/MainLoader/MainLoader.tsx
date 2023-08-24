import { FunctionComponent } from "react"
import FancyLoader from "../FancyLoader/FancyLoader"
import "./MainLoader.css"

const MainLoader: FunctionComponent<{}> = () => {
    return (
        <div className="main-loader">
            <FancyLoader
                className="ball-thing"
            />
            <p className="text-muted">Ben is thinking...</p>
        </div>
    )
}

export default MainLoader