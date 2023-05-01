import { FunctionComponent } from "react"
import "./ServiceItem.css"

interface Props {
    icon_source: string
    title: string
    text: string
}

const ServiceItem: FunctionComponent<Props> = (props) => {
    return (
        <>
            <span className="fa-stack fa-4x ServiceItem">
                <img src={props.icon_source}></img>
            </span>
            <h4 className="my-3">{props.title}
            </h4>
            <p className="text-muted">{props.text}</p>
        </>
    )
}

export default ServiceItem