'use client';

import Link from 'next/link';
import { useState } from 'react';

import { METALS } from '../constants';
import useIsMobile from '../hooks/useIsMobile';
import ProductModal from './modal.jsx'
import { useSearchParams } from "next/navigation";


export default function ProductsPage() {

    const isMobile = useIsMobile()
    const searchParams = useSearchParams();
    const searchedMetalId = searchParams.get("metal")
    const searchedMetal = METALS.find((v) => v.id == searchedMetalId)
    const [sel, setSel] = useState(searchedMetal != undefined ? searchedMetal : null)
    return (
        <div style={{ padding: isMobile ? "50px 20px 60px" : "80px 40px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                <div style={{ marginBottom: isMobile ? 36 : 56 }}>
                    <div style={{ fontFamily: "", fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 14 }}>What We Trade</div>
                    <h1 style={{ color: "#4A7A72", fontSize: isMobile ? "clamp(2rem,8vw,2.6rem)" : "clamp(2.5rem,5vw,3.8rem)", fontWeight: 300, letterSpacing: "-.02em", lineHeight: 1.1 }}>
                        Our Metals<br /><em style={{ color: "#C8A84B" }}>Portfolio</em>
                    </h1>
                </div>
                <div className="div" style={{ marginBottom: isMobile ? 28 : 52 }} />
                <p style={{ color: "#d6faf4", fontSize: ".84rem", lineHeight: 1.85, maxWidth: 700, marginBottom: isMobile ? 32 : 52 }}>
                    DRPS Jain Exim India supplies ten non-ferrous and specialty metals in standard and custom lot sizes. All materials are available with full documentation. Contact us for current pricing, availability, and delivery terms.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill,minmax(300px,1fr))", gap: 8, zIndex: 10 }}>
                    {METALS.map(m => (
                        <div key={m.id} className="card" style={{ padding: isMobile ? "24px 20px" : "34px 30px" }} onClick={() => setSel(m)}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: isMobile ? 16 : 22 }}>
                                <div>
                                    <div style={{ fontFamily: "", fontWeight: 700, fontSize: isMobile ? "1.6rem" : "2rem", letterSpacing: ".05em", color: "#C8A84B" }}>{m.name}</div>
                                    <div style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", fontWeight: 300, marginTop: 2 }}>{m.symbol}</div>
                                </div>
                                <div style={{ width: 40, height: 40, borderRadius: "50%", background: m.color, opacity: .24, flexShrink: 0 }} />
                            </div>
                            <div style={{ height: 1, background: `linear-gradient(to right,${m.color}50,transparent)`, marginBottom: 16 }} />
                            <p style={{ color: "#f8faf9", fontSize: ".83rem", lineHeight: 1.7, marginBottom: 16 }}>{m.desc}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <div style={{ fontSize: ".58rem", letterSpacing: ".18em", color: "#45b29e", fontFamily: "", textTransform: "uppercase", marginBottom: 3 }}>Purity Range</div>
                                    <div style={{ fontFamily: "", fontWeight: 600, fontSize: ".83rem", color: "#E0C06A" }}>{m.grade}</div>
                                </div>
                                <span style={{ color: "#C8A84B", fontSize: ".65rem", letterSpacing: ".18em", fontFamily: "" }}>DETAILS →</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ background: "#082220", border: "1px solid #154038", padding: isMobile ? "28px 20px" : "44px 52px", marginTop: isMobile ? 40 : 72, display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 20 : 24 }}>
                    <div>
                        <h3 style={{ fontSize: isMobile ? "1.25rem" : "1.5rem", fontWeight: 300, marginBottom: 6 }}>Looking for a specific grade or quantity?</h3>
                        <p style={{ color: "#2A6A60", fontSize: ".88rem" }}>Call or email us directly — we respond the same business day.</p>
                    </div>
                    <Link href="/contact">
                        <button className="gbtn mob-full" style={{ padding: "15px 36px", whiteSpace: "nowrap", flexShrink: 0 }} >Request a Quote</button>
                    </Link>
                </div>
            </div>
            {sel && <ProductModal sel={sel} setSel={setSel} />}
        </div >
    );
}
