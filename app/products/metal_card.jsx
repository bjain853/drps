import Link from 'next/link';

export default function MetalCard({ metal }) {
    return (
        <Link href={`/products?metal=${metal.id}`}>
            <div className="card">
                <div className="card-header-container">
                    <div>
                        <h2 className="card-header-title">{metal.name}</h2>
                        <h3 className="card-header-subtitle">{metal.symbol}</h3>
                    </div>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: metal.color, opacity: .24, flexShrink: 0 }} />
                </div>
                <div style={{ height: 1, background: `linear-gradient(to right,${metal.color}50,transparent)`, marginBottom: 16 }} />
                <p style={{ color: "#f8faf9", fontSize: ".83rem", lineHeight: 1.7, marginBottom: 16 }}>{metal.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ fontSize: ".58rem", letterSpacing: ".18em", color: "#45b29e", textTransform: "uppercase", marginBottom: 3 }}>Purity Range</div>
                        <div style={{ fontWeight: 600, fontSize: ".83rem", color: "#E0C06A" }}>{metal.grade}</div>
                    </div>
                    <span style={{ color: "#C8A84B", fontSize: ".65rem", letterSpacing: ".18em" }}>DETAILS →</span>
                </div>
            </div>
        </Link>
    );
}