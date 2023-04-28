import { FunctionComponent } from "react"
import "./PortfolioItem.css"

interface PortfolioItemProps {
    index: number
    intro: string
    description: string
    title: string
    imgUrl: string
}

const PortfolioItem: FunctionComponent<PortfolioItemProps> = (props) => {

    const { index, title, intro, description, imgUrl } = props

    return (
        <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href={`#portfolioModal${index}`}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid portfolio-item-image" src={imgUrl} alt="..." />
            </a>
            <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{title}</div>
                {/* <div className="portfolio-caption-subheading text-muted">Illustration</div> */}
            </div>
        </div>
    )
}

export default PortfolioItem;