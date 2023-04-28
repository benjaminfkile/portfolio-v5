import { Component } from "react"
// import { io } from "./utils/socket"
import mutator from "./utils/mutator"
import Footer from "./components/Footer"
import Header from "./components/header/Header"
import NavMenu from "./menu/NavMenu"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Portfolio from "./sections/portfolio/portfolio"
import Services from "./sections/services/Services"

interface State {
  aboutText: string
}

class App extends Component<{}, State> {

  state = {
    aboutText: ""
  }

  componentDidMount(): void {
    // io.emit("send-page-data", ["about"])

    // io.on("receive-page-data", (payload: any) => {
    //   console.log(payload)
    //   // this.manageState(keys)
    // })
  }

  /* A function that is used to update the state. It is used to prevent the state from being updated in
  an uncontrolled manner. */
  manageState = (keys: { key: string, value?: any }[]) => {
    this.setState(mutator(this.state, keys))
  }

  render() {

    // const { aboutText } = this.state

    return (
      <div className="App">
        <NavMenu />
        <Header />
        <About aboutText={"I am a highly skilled full-stack developer with a passion for crafting beautiful and intuitive user interfaces. With a strong focus on front-end development, I bring a wealth of expertise to the table, leveraging cutting-edge technologies and best practices to create seamless digital experiences. With an eye for detail and a commitment to delivering high-quality work on time and on budget, I am dedicated to helping businesses and organizations succeed in an ever-evolving digital landscape. Welcome to my portfolio website, where you can explore my impressive body of work and get a glimpse of my creative process."} />
        <Services servicesHeader="Lorem ipsum dolor sit amet, consectetur adipisicing" />
        <Portfolio />
        <Contact />
        <Footer companyName="Your Company Name" />
      </div >
    )
  }
}

export default App;