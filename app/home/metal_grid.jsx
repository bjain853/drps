"use client";

import { METALS } from "../constants";


import Link from 'next/link';

import useIsMobile from '../hooks/useIsMobile';

export default function MetalGrid() {
    const isMobile = useIsMobile();

    return (
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
    )
}