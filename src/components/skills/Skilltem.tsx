import { FunctionComponent } from "react"
import "./SkillItem.css"

interface Props {
    icon_source: string
    title: string
    description: string
    proficiency: number
}

const SkillItem: FunctionComponent<Props> = (props) => {
    return (
        <>
            <span className="fa-stack fa-4x SkillItem">
                <img src={props.icon_source} alt="..."></img>
            </span>
            <h4>{props.title}
            </h4>
            <p className="text-muted">{props.description}</p>
        </>
    )
}

export default SkillItem