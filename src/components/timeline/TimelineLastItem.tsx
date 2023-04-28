import { FunctionComponent } from "react"

interface Props {
    textArray: string[]
}

const TimelineLastItem: FunctionComponent<Props> = (props) => {
    return (
        <li className="timeline-inverted">
            <div className="timeline-image">
                <h4>
                    {props.textArray.map((text, i) =>
                        <div key={i}>
                            {text}
                            <br />
                        </div>)}
                </h4>
            </div>
        </li>
    )
}

export default TimelineLastItem;