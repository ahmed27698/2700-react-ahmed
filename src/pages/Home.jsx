import Company from "../components/pages/home/Company"
import Brands from "../components/pages/home/Brands"
import Features from "../components/pages/home/Features"
import FeaturesTwo from "../components/pages/home/FeaturesTwo"
import MarketPlace from "../components/pages/home/MarketPlace"
import Team from "../components/pages/home/Team"
import Prices from "../components/pages/home/Prices"
import Faq from "../components/pages/home/Faq"

export default function Home() {
    return (
        <>
            <Company />
            <Brands />
            <Features />
            <FeaturesTwo />
            <MarketPlace />
            <Team />
            <Prices />
            <Faq />
        </>
    )
}