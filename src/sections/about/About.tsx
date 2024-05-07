import { FunctionComponent } from "react"
import "./About.css"

interface Props {
    about: string
}

const About: FunctionComponent<Props> = (props) => {

    const { about } = props

    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase custom-heading-color">About Me</h2>
                    <h3 className="section-subheading text-muted custom-subheading-color">{about}</h3>
                </div>
            </div>
        </section>
    )
}

export default About