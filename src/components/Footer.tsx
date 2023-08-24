import { FunctionComponent } from "react"

interface Props {
    text: string
}

const Footer: FunctionComponent<Props> = (props) => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">
                        {props.text}
                        <script>
                            document.write(new Date().getFullYear())
                        </script>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://github.com/benjaminfkile" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/benjaminfkile/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer