import { FunctionComponent } from "react"
import PortfolioItemTypes from "../../types/PortfolioItemTypes"
import handlePlaybackRate from "../../utils/handlePlaybackRate"
import "./PortfolioItem.css"

interface PortfolioItemProps {
    index: number
    portfolioItem: PortfolioItemTypes
}

const PortfolioItem: FunctionComponent<PortfolioItemProps> = (props) => {

    const { index, portfolioItem } = props

    if (portfolioItem.media_type > 0) {
        handlePlaybackRate(index, portfolioItem.playback_rate, `video-${index}`)
    }

    return (
        <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href={`#portfolioModal${index}`}>
                {/* <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div> */}
                {portfolioItem.media_type < 1 &&
                    <div className="portfolio-item-img-wrapper pmc-gradient">
                        <img crossOrigin="anonymous" alt="..." src={`${process.env.REACT_APP_API_URL}/api/media?key=images/${portfolioItem.file_name}`} />
                    </div>}
                {portfolioItem.media_type > 0 &&
                    <video
                        style={{ transform: `scaleY(${portfolioItem.transform_value})` }}
                        id={`video-${index}`}
                        crossOrigin="anonymous"
                        className="profolio-video-player"
                        width="350"
                        muted
                        autoPlay
                        playsInline
                        loop
                    >

                        <source src={`${process.env.REACT_APP_API_URL}/api/media?key=videos/${portfolioItem.file_name}`} type="video/mp4" />
                    </video>
                }
            </a>
            <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{portfolioItem.title}</div>
            </div>
        </div>
    )
}

export default PortfolioItem