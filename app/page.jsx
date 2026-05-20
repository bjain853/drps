'use client';

import Link from "next/link";

import useIsMobile from './hooks/useIsMobile';
import { METALS } from "./constants";

export default function HomePage() {

    const isMobile = useIsMobile();

    return (
        <div>
            {/* HERO */}
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

            {/* STATS */}
            < section style={{ padding: isMobile ? "40px 20px" : "70px 40px", background: "#082220", borderTop: "1px solid #0C2E2A", borderBottom: "1px solid #0C2E2A" }
            }>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3,1fr)", gap: isMobile ? "28px 16px" : "0" }}>
                        {[
                            { num: "1954", label: "Year Established" },
                            { num: "70+", label: "Years of Heritage" },
                            { num: "15", label: "Specialty Metals" },
                        ].map((s, i) => (
                            <div key={i} style={{ textAlign: "center", padding: isMobile ? "0" : "20px 0", borderRight: !isMobile && i < 3 ? "1px solid #154038" : "none" }}>
                                <div style={{ fontFamily: "", fontSize: isMobile ? "1.9rem" : "2.4rem", fontWeight: 700, color: "#C8A84B", letterSpacing: ".05em" }}>{s.num}</div>
                                <div style={{ fontSize: ".62rem", letterSpacing: ".16em", color: "#f8fdfc", textTransform: "uppercase", fontFamily: "", marginTop: 4 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* METALS GRID */}
            < section style={{ padding: isMobile ? "50px 20px" : "90px 40px" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <div style={{ marginBottom: 40 }}>
                        <div style={{ fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 12 }}>What We Trade</div>
                        <h2 style={{ fontSize: isMobile ? "1.9rem" : "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-.02em" }}>Our Metal Portfolio</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill,minmax(185px,1fr))", gap: 4 }}>
                        {METALS.map(m => (
                            <Link style={{ textDecoration: 'none' }} key={m.id} href={`/products?metal=${m.id}`}>
                                <div className="card" style={{ padding: isMobile ? "20px 16px" : "30px 30px" }}>
                                    <div style={{ fontWeight: 700, fontSize: ".6rem", letterSpacing: ".28em", color: "#C8A84B", marginBottom: 8 }}>{m.symbol}</div>
                                    <div style={{ fontSize: isMobile ? "1.1rem" : "1.25rem", fontWeight: 300, marginBottom: 7 }}>{m.name}</div>
                                    <div style={{ width: 24, height: 1, background: m.color, opacity: .5, marginBottom: 9 }} />
                                    <div style={{ fontSize: ".68rem", color: "#2A6A60", letterSpacing: ".04em" }}>{m.uses.split(",")[0]}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        <Link href="/products">
                            <button className="obtn" style={{ padding: "13px 36px" }} >View Full Portfolio</button>
                        </Link>
                    </div>
                </div>
            </section >

            {/* HERITAGE CTA */}
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
        </div >
    );
}
