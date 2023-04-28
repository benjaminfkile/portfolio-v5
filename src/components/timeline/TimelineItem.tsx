import { FunctionComponent } from "react";
import "./TimeLineItem.css"

interface TimelineItemProps {
    date: string
    title: string
    text: string
    imgUrl: string | null
    index: number
}

const TimelineItem: FunctionComponent<TimelineItemProps> = (props) => {

    const { date, title, text, imgUrl, index } = props

    return (
        <div className={`timeline-item ${index % 2 === 0 ? "timeline-item-even" : "timeline-item-odd"}`} >
            <div className="timeline-image">{imgUrl && <img className="rounded-circle img-fluid" src={`${imgUrl}?${Date.now()}`}
                alt="..." />}
            </div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{date}</h4>
                    <h4 className="subheading">{title}</h4>
                </div>
                <div className="timeline-body">
                    <p className="text-muted">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TimelineItem;