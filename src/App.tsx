import { useState, useEffect } from "react"
import axios from "axios"
import Header from "./components/header/Header"
import NavMenu from "./menu/NavMenu"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Skills from "./sections/skills/Skills"
import Portfolio from "./sections/portfolio/Portfolio"
import Timeline from "./components/timeline/Timeline"
import Footer from "./components/Footer"
import ContentResponseTypes from "./types/ContentResponseTypes"
import APIError from "./components/error/APIError"

const App = () => {
  const [apiResponse, setApiResponse] = useState<ContentResponseTypes>({
    content: { about: "", portfolioItems: [], skillItems: [], timelineItems: [] },
    error: false,
    errorMsg: {},
  })

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/portfolio-content`)
      .then((res) => {
        const response: ContentResponseTypes = res.data
        setApiResponse(response)
      })
      .catch(() => {
        setApiResponse((prev) => ({ ...prev, error: true }))
      })
  }, [])

  const { content, error } = apiResponse

  return (
    <div className="App">
      {!error ? (
        <div className="AppNotLoading">
          <NavMenu />
          <Header />
          <About about={content.about} />
          <Timeline timelineItems={content.timelineItems} />
          <Skills skillItems={content.skillItems} />
          <Portfolio portfolioItems={content.portfolioItems} />
          <Contact />
          <Footer text="benkile" />
        </div>
      ) : (
        <APIError />
      )}
    </div>
  )
}

export default App
