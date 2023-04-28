import { FunctionComponent } from "react"
import PortfolioItem from "../../components/portfolio/PortfolioItem"
import PortfolioItemModal from "../../components/portfolio/PortfolioItemModal"
import portfolioItems from "../../components/portfolio/PortfolioItems"
import "./Portfolio.css"

interface PortfolioProps {

}

const Portfolio: FunctionComponent<PortfolioProps> = () => {//bump
    return (
        <section className="page-section bg-light" id="portfolio">

            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">A few cool things...</h3>
                </div>

                <div className="portfolio-items">
                    {portfolioItems.map((item, i) =>
                        <div key={i}>
                            <PortfolioItem
                                index={i}
                                title={item.title}
                                intro={item.intro}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        </div>
                    )}
                </div>
            </div>

            {portfolioItems.map((item, i) =>
                <div key={i}>
                    <PortfolioItemModal
                        index={i}
                        title={item.title}
                        intro={item.intro}
                        description={item.description}
                        imgUrl={item.imgUrl}
                    />
                </div>
            )}


        </section>
    );
}

export default Portfolio;