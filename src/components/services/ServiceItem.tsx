import { FunctionComponent } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "./ServiceItem.css"

interface Props {
    source: string
    title: string
    text: string
    proficiency: number
}

const ServiceItem: FunctionComponent<Props> = (props) => {
    return (
        <>
            <span className="fa-stack fa-4x ServiceItem">
                <img src={props.source}></img>
            </span>
            <h4 className="my-3">{props.title}
            </h4>
            <p className="text-muted">{props.text}</p>
        </>
    )
}

export default ServiceItem