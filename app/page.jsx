import Hero from "./home/hero";
import MetalGrid from "./home/metal_grid";
import Stats from "./home/stats";
import Heritage from "./home/heritage";

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
