import Navigation from "../_Components/Navigation"
import HomeAlert from "./Sections/HomeAlert"
import HomeSection from "./Sections/HomeSection"

function HomePage() {
  return (
    <>
        <HomeAlert />
        <Navigation />
        <HomeSection />
    </>
  )
}

export default HomePage