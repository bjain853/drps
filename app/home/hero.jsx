"use client";

import Link from 'next/link';

import useIsMobile from '../hooks/useIsMobile';


export default function Hero() {
    const isMobile = useIsMobile();
    return (
        <section style={{ minHeight: "88vh", display: "flex", alignItems: "center", padding: isMobile ? "60px 20px 50px" : "80px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 50%,rgba(12,90,78,.2) 0%,transparent 65%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 30% at 15% 75%,rgba(200,168,75,.05) 0%,transparent 60%)" }} />
            {!isMobile && (
                <div style={{ position: "absolute", right: "4%", top: "10%", opacity: .04 }}>
                    <svg width="380" height="380" viewBox="0 0 420 420">
                        {[...Array(9)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * 52} x2="420" y2={i * 52} stroke="#C8A84B" strokeWidth=".8" />)}
                        {[...Array(9)].map((_, i) => <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="420" stroke="#C8A84B" strokeWidth=".8" />)}
                    </svg>
                </div>
            )}
            <div style={{ maxWidth: 1280, margin: "0 auto", zIndex: 2, position: "relative", width: "100%" }}>
                <h1 className="f2" style={{ color: "#4A7A72", fontSize: isMobile ? "clamp(2.2rem,9vw,3rem)" : "clamp(2.6rem,6.5vw,5.8rem)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-.02em", marginBottom: 22, maxWidth: 800 }}>
                    India's Trusted Name<br />in <em style={{ fontStyle: "italic", color: "#C8A84B" }}>Non-Ferrous Metals</em>
                </h1>
                <p className="f3" style={{ color: "#d6faf4", fontSize: isMobile ? "0.95rem" : "1.05rem", lineHeight: 1.85, maxWidth: 520, marginBottom: 16 }}>
                    DRPS Jain Exim India has traded specialty and non-ferrous metals from the heart of Old Delhi for over seven decades — supplying tin, copper, nickel, silicon, and more to manufacturers and industries across the country.
                </p>
                <div className="f3" style={{ display: "inline-flex", alignItems: "center", gap: 12, border: "1px solid #1D5048", padding: "9px 16px", marginBottom: 36, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "", fontSize: ".70rem", fontWeight: '600', letterSpacing: ".2em", color: "#e8c55b", textTransform: "uppercase" }}>70+ Years of Unbroken Trading Heritage</span>
                </div>
                <div className="f3 r-stack" style={{ display: "flex", gap: 14 }}>
                    <Link href="/products">
                        <button className="gbtn mob-full" style={{ padding: "15px 36px" }}>Our Metals</button>
                    </Link>
                    <Link href="/about">
                        <button className="obtn mob-full" style={{ padding: "15px 36px" }} >Our Story</button>
                    </Link>
                </div>
            </div>
        </section >
    );
}