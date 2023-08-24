import { FunctionComponent } from "react"
import "./APIError.css"

const APIError: FunctionComponent<{}> = (props) => {
    return (
        <div className="APIError">
            <span className="APIErrorEmoji">{`(>_<)`}</span>
            <p>Sorry, there was an issue fetching data from the API</p>
        </div>
    )
}

export default APIError