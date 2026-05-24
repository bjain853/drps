"use client";


import useIsMobile from '../hooks/useIsMobile';

export default function Stats() {
    const isMobile = useIsMobile();
    return (
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

    );
}