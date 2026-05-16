import { METALS } from "../constants";

export default function Ticker() {
    return (<div style={{ background: "#082220", borderBottom: "1px solid #0C2E2A", padding: "7px 0", marginTop: 70 }}>
        <div className="tw">
            <div className="ti" style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: ".65rem", letterSpacing: ".12em" }}>
                {[...METALS, ...METALS].map((m, i) => (
                    <span key={i} style={{ marginRight: 50 }}>
                        <span style={{ color: "#C8A84B" }}>{m.symbol}</span>
                        <span style={{ margin: "0 10px", color: "white" }}>{m.name.toUpperCase()}</span>
                        <span style={{ color: "#0F3630", marginRight: 50 }}>●</span>
                    </span>
                ))}
            </div>
        </div>
    </div>);
}