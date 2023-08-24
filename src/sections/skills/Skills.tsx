import { FunctionComponent } from "react"
import SkillItem from "../../components/skills/Skilltem"
import SkillItemTypes from "../../types/SkillItemTypes"
import "./Skills.css"


interface Props {
    skillItems: SkillItemTypes[]
}

const Skills: FunctionComponent<Props> = (props) => {

    const { skillItems } = props

    return (
        <section className="page-section" id="skills">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                </div>
                <div className="row text-center">
                    {skillItems.map((item, i) =>
                        <div className="col-md-4" key={i}>
                            <SkillItem
                                icon_source={item.icon_source}
                                title={item.title}
                                description={item.description}
                                proficiency={item.proficiency}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Skills