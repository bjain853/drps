import Link from 'next/link';

import Header from './header';
import Intro from './intro';
import Timeline from './timeline';
import Values from './values';
import "./about.css";


export const metadata = {
    title: 'About Us | DRPS JAIN EXIM India',
    description: 'Learn about our journey, core values, and the timeline that shaped our mission to deliver exceptional value to businesses around the globe that rely on consistent supply of non-ferrous metals',
    openGraph: {
        title: 'About Us | DRPS JAIN EXIM India',
        description: 'Learn about our journey, core values, and the timeline that shaped our mission to deliver exceptional value to businesses around the globe that rely on consistent supply of non-ferrous metals',
        url: 'https://drpsdeployed.vercel.app/about',
        siteName: 'DRPS JAIN EXIM India',
        locale: 'en_US',
        type: 'website',
    },
};


export default function AboutPage() {
    return (
        <div className="about-container">
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>

                <Header />
                <div className="spacer" />
                <Intro />
                <Timeline />
                <Values />
                <div style={{ textAlign: "center" }}>
                    <button className="gbtn" style={{ padding: "15px 44px" }} >
                        <Link href="/contact">
                            Get in Touch
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
