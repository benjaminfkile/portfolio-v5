import { FunctionComponent } from "react";
import "./TimeLineItem.css"

interface TimelineItemProps {
    date: string
    title: string
    text: string
    imgUrl: string | null
}

const TimelineItem: FunctionComponent<TimelineItemProps> = (props) => {
    return (
        <>
            <div className="timeline-image">{props.imgUrl && <img className="rounded-circle img-fluid" src={`${props.imgUrl}?${Date.now()}`}
                alt="..." />}
            </div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{props.date}</h4>
                    <h4 className="subheading">{props.title}</h4>
                </div>
                <div className="timeline-body">
                    <p className="text-muted">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default TimelineItem;