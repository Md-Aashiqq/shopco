import Navigation from "../_Components/Navigation"
import BrandSection from "./Sections/BrandSection"
import HomeAlert from "./Sections/HomeAlert"
import HomeSection from "./Sections/HomeSection"
import ProductSection from "./Sections/ProductSection"

function HomePage() {
  return (
    <>
        <HomeAlert />
        <Navigation />
        <HomeSection />
        <BrandSection />
        <ProductSection title={"Featured Products"} category={"featured"} />
        <ProductSection title={"Top Selling"} category={"top-selling"} />
    </>
  )
}

export default HomePage