import { Component } from "react"
import axios from "axios"
import mutator from "./utils/mutator"
import Header from "./components/header/Header"
import NavMenu from "./menu/NavMenu"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Skills from "./sections/skills/Skills"
import Portfolio from "./sections/portfolio/Portfolio"
import Timeline from "./components/timeline/Timeline"
import Footer from "./components/Footer"
import ContentResponseTypes from "./types/ContentResponseTypes"
import MainLoader from "./components/loaders/MainLoader/MainLoader"
import APIError from "./components/error/APIError"

interface State {
  apiResponse: ContentResponseTypes
  // loading: boolean
}

class App extends Component<{}, State> {//bump

  state = {
    apiResponse: { content: { about: "", portfolioItems: [], skillItems: [], timelineItems: [] }, error: false, errorMsg: {} },
    //loading: true,
  }

  componentDidMount(): void {
    this.go()
  }

  /* A function that is used to update the state. It is used to prevent the state from being updated in
  an uncontrolled manner. */
  manageState = (keys: { key: string, value?: any }[]) => {
    this.setState(mutator(this.state, keys))
  }

  go = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio-content`)
      .then(res => {
        console.log(res.data)
        const apiResponse: ContentResponseTypes = res.data
        if (apiResponse.error) {
          this.manageState([{ key: "apiResponse", value: apiResponse }, { key: "loading", value: false }])
        } else {
          this.manageState([{ key: "apiResponse", value: apiResponse }])
        }
      }).catch(() => {
        this.manageState([{ key: "loading", value: false }, { key: "error", value: true }])
      })
  }


  render() {

    const { apiResponse, /*loading*/ } = this.state
    const content = apiResponse.content
    const error = apiResponse.error

    return (
      <div className="App">
        {!error &&
          // <div className={`${loading ? "AppLoading" : "AppNotLoading"}`}>
          <div className={"AppNotLoading"}>
            <NavMenu />
            <Header />
            <About about={content.about} />
            <Timeline timelineItems={content.timelineItems} />
            <Skills skillItems={content.skillItems} />
            <Portfolio portfolioItems={content.portfolioItems} />
            <Contact />
            <Footer text="benkile" />
          </div>
        }
        {/* {loading && !error && <MainLoader />} */}
        {error && <APIError />}
      </div >
    )
  }
}

export default App