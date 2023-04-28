import { FunctionComponent } from "react"
import TimelineItem from "./TimelineItem"
import timelineItems from "./timelineItems"
import TimelineLastItem from "./TimelineLastItem"

interface Props {

}

const Timeline: FunctionComponent<Props> = () => {
    return (
        <ul className="timeline">

            {timelineItems.map((item, i) =>
                <li key={i}>
                    <TimelineItem
                        date={item.date}
                        title={item.title}
                        text={item.text}
                        imgUrl={item.imgUrl}
                    />
                </li>)}
            {/* <TimelineLastItem
                textArray={["Some text", "More text", ":)"]}
            /> */}
        </ul>
    )
}

export default Timeline