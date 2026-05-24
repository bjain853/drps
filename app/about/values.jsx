export default function Values() {
    return (
        <div className="values-container">
            <div style={{ fontFamily: "", fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 32 }}>What We Stand For</div>
            <div className="value-grid">
                {[
                    { t: "Verified Quality", i: "◈", d: "Every parcel we supply carries documentation traceable to source. We verify purity and specification before dispatch to protect your production line." },
                    { t: "Decades of Trust", i: "◎", d: "Since 1954, generations of buyers have returned to the Jain name for consistent supply, honest pricing, and reliable follow-through on commitments." },
                    { t: "Market Knowledge", i: "◇", d: "Seventy years in Sadar Bazar — one of India's oldest metals trading centres — means deep price intelligence and sourcing networks others simply cannot match." },
                ].map(v => (
                    <div key={v.t}>
                        <div style={{ fontSize: "1.4rem", color: "#C8A84B", marginBottom: 12 }}>{v.i}</div>
                        <div style={{ fontFamily: "", fontWeight: 600, fontSize: "1rem", letterSpacing: ".05em", marginBottom: 12, color: "#E0C06A" }}>{v.t}</div>
                        <p style={{ color: "#f8faf9", fontSize: ".84rem", lineHeight: 1.8 }}>{v.d}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}