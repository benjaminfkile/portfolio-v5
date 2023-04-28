import { Component } from "react"
import "./HeaderBackground.scss"
import init from "./HeaderBackgroundLogic"

interface HeaderBackgroundProps {

}

interface HeaderBackgroundState {

}

class HeaderBackground extends Component<HeaderBackgroundProps, HeaderBackgroundState> {
    state = { 

    }

    componentDidMount(): void {
        init()
    }

    render() {
        return (
            <div className="HeaderBGSlider">
                <div className="HeaderItemsGroup">
                    <div className="item">
                        <div className="block">
                            <span className="circleLight"></span>
                            <div className="text">
                                <h2>Hi</h2>
                                <p>I`m Ben</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBackground;