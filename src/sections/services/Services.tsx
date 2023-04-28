import { FunctionComponent } from "react";
import ServiceItem from "../../components/services/ServiceItem";
import serviceItems from "../../components/services/serviceItems";

interface Props {
    servicesHeader: string
}

const Services: FunctionComponent<Props> = (props) => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    {/* <h3 className="section-subheading text-muted">{props.servicesHeader}</h3> */}
                </div>
                <div className="row text-center">
                    {serviceItems.map((item, i) =>
                        <div className="col-md-4" key={i}>
                            <ServiceItem
                                source={item.source}
                                title={item.title}
                                text={item.text}
                                proficiency={item.proficiency}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Services