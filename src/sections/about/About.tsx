import { FunctionComponent } from "react";
import Timeline from "../../components/timeline/Timeline";

interface Props {
    aboutText: string
}

const About: FunctionComponent<Props> = (props) => {

    const { aboutText } = props

    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About Me</h2>
                    <h3 className="section-subheading text-muted">{aboutText}</h3>
                    {/* <h3 className="section-subheading text-muted">
                        Nibh sed pulvinar proin gravida hendrerit. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Cras fermentum odio eu feugiat pretium nibh ipsum. Pellentesque sit amet porttitor eget dolor morbi. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Sed tempus urna et pharetra pharetra massa massa. Sodales ut etiam sit amet nisl. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Volutpat lacus laoreet non curabitur gravida arcu. Purus semper eget duis at tellus. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Enim ut tellus elementum sagittis vitae et leo. Sit amet risus nullam eget felis. Sit amet venenatis urna cursus eget nunc scelerisque. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Malesuada fames ac turpis egestas.

                        Pulvinar etiam non quam lacus suspendisse faucibus interdum. In vitae turpis massa sed. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Hac habitasse platea dictumst quisque sagittis purus sit. Imperdiet proin fermentum leo vel orci porta. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Massa tincidunt nunc pulvinar sapien et ligula. Condimentum id venenatis a condimentum. Massa eget egestas purus viverra accumsan in nisl nisi. Phasellus vestibulum lorem sed risus ultricies.
                    </h3> */}
                </div>
                <Timeline />
            </div>
        </section>
    )
}

export default About