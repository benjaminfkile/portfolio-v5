import { FunctionComponent } from "react"
import uuid from "react-uuid"
import "./FancyLoader.css"

interface Props {
    className: string
    id?: string
}

const FancyLoader: FunctionComponent<Props> = (props) => {

    const { className, id } = props

    return (
        <span id={id ? id : uuid()} className={className}></span>
    )
}

export default FancyLoader