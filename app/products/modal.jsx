'use client'

import Link from 'next/link';
import useIsMobile from '../hooks/useIsMobile';


export default function ProductModal({ selectedMetal }) {

    const isMobile = useIsMobile();
    if (selectedMetal != null) {
        return (
            <div className="overlay">
                <div style={{ background: "#082220", border: "1px solid #1D5048", maxWidth: 560, width: "100%", padding: isMobile ? "28px 20px" : "44px", position: "relative", maxHeight: "90vh", overflowY: "auto" }}
                    onClick={e => e.stopPropagation()}>
                    <button style={{ position: "absolute", top: 14, right: 18, background: "none", border: "none", color: "#2A6A60", fontSize: "1.5rem", cursor: "pointer", lineHeight: 1, padding: "4px 8px" }}>
                        <Link href="/products">
                            ✕
                        </Link>
                    </button>
                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: isMobile ? "2.2rem" : "2.8rem", color: "#C8A84B", letterSpacing: ".05em" }}>{selectedMetal.symbol}</div>
                    <h2 style={{ fontSize: isMobile ? "1.6rem" : "2rem", fontWeight: 300, marginBottom: 20 }}>{selectedMetal.name}</h2>
                    <div className="div" style={{ marginBottom: 24 }} />
                    <p style={{ color: "#7ac4b8", lineHeight: 1.9, marginBottom: 24, fontSize: ".9rem" }}>{selectedMetal.desc}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
                        {[{ label: "Purity Grade", value: selectedMetal.grade }, { label: "Applications", value: selectedMetal.uses }].map(d => (
                            <div key={d.label} style={{ background: "#061A18", border: "1px solid #154038", padding: "16px" }}>
                                <div style={{ fontSize: ".55rem", letterSpacing: ".22em", color: "#C8A84B", fontFamily: "", textTransform: "uppercase", marginBottom: 6 }}>{d.label}</div>
                                <div style={{ fontSize: ".85rem", color: "#8BB4B0", lineHeight: 1.5 }}>{d.value}</div>
                            </div>
                        ))}
                    </div>

                    <button className="gbtn" style={{ width: "100%", padding: 14, fontSize: ".78rem" }}>
                        <Link href={`/contact?metal=${selectedMetal.id}`}>
                            Enquire About This Metal
                        </Link>
                    </button>
                </div>
            </div>
        );
    }

}