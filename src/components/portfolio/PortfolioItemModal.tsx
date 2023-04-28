import { FunctionComponent } from "react"

interface Props {
    index: number
    intro: string
    description: string
    title: string
    imgUrl: string
}

const PortfolioItemModal: FunctionComponent<Props> = (props) => {

    const { index, title, intro, description, imgUrl } = props

    return (
        <div className="portfolio-modal modal fade" id={`portfolioModal${index}`} tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content portfolio-modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <span className="material-icons-outlined">close</span>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{title}</h2>
                                    <p className="item-intro text-muted">{intro}</p>
                                    <img className="img-fluid d-block mx-auto" src={imgUrl} alt="..." />
                                    <p>{description}</p>
                                    <ul className="list-inline">
                                        {/* <li>
                                            <strong>Client:</strong>
                                            Threads
                                        </li> */}
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItemModal;