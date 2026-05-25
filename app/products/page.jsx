
import Link from 'next/link';

import { METALS } from '../constants';
import ProductModal from './modal';
import MetalCard from './metal_card';
import "./products.css";


const METAL_NAMES = METALS.map((m) => m.name)

export const metadata = {
    title: 'Non-Ferrous & Specialty Metals Portfolio | DRPS Jain Exim India',
    description: 'Supplying ten non-ferrous and specialty industrial metals in standard and custom lot sizes. View purity ranges, grades, and technical documentation.',
    openGraph: {
        title: 'Industrial Metals Portfolio | DRPS Jain Exim India',
        description: `Explore our catalog of ten non-ferrous and specialty metals available with full purity documentation. Our portfolio includes ${METAL_NAMES} with all grades available`,
        type: 'website',
    }
};

export default async function ProductsPage({ searchParams }) {
    const searchMetalId = (await searchParams)?.metal;
    const searchedMetal = METALS.find((v) => v.id == searchMetalId)
    if (searchedMetal != null) {
        return (<ProductModal selectedMetal={searchedMetal} />);
    }
    else
        return (
            <div className="product-container">
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <div className="product-header">
                        <h5 style={{ fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 14 }}>What We Trade</h5>
                        <h1 id="product-page-title">
                            Our Metals<br /><em style={{ color: "#C8A84B" }}>Portfolio</em>
                        </h1>
                    </div>
                    <div className="contact-box" />
                    <p className="contact-text">
                        DRPS Jain Exim India supplies ten non-ferrous and specialty metals in standard and custom lot sizes. All materials are available with full documentation. Contact us for current pricing, availability, and delivery terms.
                    </p>

                    <div className="product-grid-container">
                        {METALS.map(m => (
                            <MetalCard key={m.id} metal={m} />
                        ))}
                    </div>

                    <div className="product-footer">
                        <div>
                            <h4 className="footer-heading">Looking for a specific grade or quantity?</h4>
                            <p style={{ color: "#2A6A60", fontSize: ".88rem" }}>Call or email us directly — we respond the same business day.</p>
                        </div>
                        <Link href="/contact">
                            <button className="gbtn mob-full" style={{ padding: "15px 36px", whiteSpace: "nowrap", flexShrink: 0 }} >Request a Quote</button>
                        </Link>
                    </div>
                </div>
            </div >
        );
}
