import { FunctionComponent, useEffect } from "react"
import hblService from "./HeaderBackgroundLogic"
import "./HeaderBackground.scss"


const HeaderBackground: FunctionComponent<{}> = () => {

    useEffect(() => {
        hblService.init()
        hblService.go = false
    }, [])

    return (
        <div className="HeaderBGSlider">
            <div className="HeaderItemsGroup">
                <div className="item">
                    <div className="block"
                        onMouseEnter={() => {
                            hblService.go = true
                        }}
                        onMouseLeave={() => {
                            hblService.go = false
                        }}
                    >
                        <span className="circleLight"></span>
                        <div className="text">
                            <h2>Hi</h2>
                            <h3>I`m Ben</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBackground