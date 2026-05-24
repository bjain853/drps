"use client";

import Link from 'next/link';

import useIsMobile from '../hooks/useIsMobile';

export default function Heritage() {
    const isMobile = useIsMobile();
    return (
        < section style={{ padding: isMobile ? "50px 20px" : "90px 40px", background: "linear-gradient(135deg,#082220,#0C2E2A)" }}>
            <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
                <div className="div" style={{ marginBottom: isMobile ? 36 : 52, width: "100%" }} />
                <div style={{ fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 16 }}>Our Heritage</div>
                <h2 style={{ color: "#4A7A72", fontSize: isMobile ? "1.7rem" : "clamp(1.8rem,3.5vw,2.7rem)", fontWeight: 300, letterSpacing: "-.02em", marginBottom: 20 }}>
                    From Sadar Bazar to<br /><em style={{ color: "#C8A84B" }}>the World</em>
                </h2>
                <p style={{ color: "#d6faf4", fontSize: isMobile ? "0.88rem" : "1rem", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 16px" }}>
                    Founded in 1954, the Jain family enterprise has traded non-ferrous and specialty metals through multiple generations. Operating from the historic Bara Tooti Chowk market in Sadar Bazar — one of India's oldest wholesale trading hubs — we bring decades of market insight to every transaction.
                </p>
                <p style={{ color: "#d6faf4", fontSize: isMobile ? "0.82rem" : "0.9rem", lineHeight: 1.9, maxWidth: 620, margin: "0 auto", marginBottom: 36 }}>
                    Today, as DRPS Jain Exim India, we continue that tradition with a focus on quality verification, consistent supply, and long-term client relationships.
                </p>
                <Link href="/contact">
                    <button className="gbtn" style={{ padding: "15px 40px", fontSize: ".78rem" }}> Get in Touch </button>
                </Link>
                <div className="div" style={{ marginTop: isMobile ? 36 : 52, width: "100%" }} />
            </div>
        </section >
    );
}