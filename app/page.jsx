import Hero from "./home/hero";
import MetalGrid from "./home/metal_grid";
import Stats from "./home/stats";
import Heritage from "./home/heritage";
import Loading from "./loading";


export const metadata = {
    title: 'Non-Ferrous & Specialty Metals | DRPS Jain Exim India',
    description: 'Supplying non-ferrous and specialty industrial metals to businesses in India for over 75 years. ',
    openGraph: {
        title: 'Industrial Metals | DRPS Jain Exim India',
        description: 'Supplying non-ferrous and specialty industrial metals to businesses in India for over 75 years.',
        type: 'website',
    }
};


export default function HomePage() {
    return (
        <div>
            <Hero />
            <Stats />
            <MetalGrid />
            <Heritage />
        </div >
    );
}
