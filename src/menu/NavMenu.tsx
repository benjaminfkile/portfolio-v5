import { FunctionComponent } from "react"


const NavMenu: FunctionComponent<{}> = () => {

    const collapesMobile = () => {
        let elem = document.getElementById("mobile-nav-btn")
        setTimeout(() => {
            if (elem) {
                elem.click()
            }
        }, 250)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                {/* <a className="navbar-brand" href="#page-top"><img src="https://picsum.photos/200/200"
                    alt="..." /></a> */}
                <button id="mobile-nav-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item" onClick={() => collapesMobile()}><a className="nav-link" href="#about">About Me</a></li>
                        <li className="nav-item" onClick={() => collapesMobile()}><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item" onClick={() => collapesMobile()}><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item" onClick={() => collapesMobile()}><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu