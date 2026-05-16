'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { CO, NAV, METALS } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

export default function Footer() {
    const router = useRouter();
    const isMobile = useIsMobile();

    return (
        <footer style={{ background: "#040F0E", borderTop: "1px solid #0C2E2A", padding: isMobile ? "40px 20px 32px" : "60px 40px 36px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                {isMobile ? (
                    /* Mobile footer – stacked */
                    <div>
                        <div style={{ marginBottom: 28 }}>
                            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: ".16em", color: "#C8A84B", marginBottom: 4 }}>DRPS JAIN EXIM INDIA</div>
                            <div style={{ fontSize: ".55rem", letterSpacing: ".22em", color: "#8B6914", fontFamily: "'Rajdhani',sans-serif", marginBottom: 12 }}>ESTABLISHED {CO.est}</div>
                            <p style={{ color: "#1D5048", fontSize: ".82rem", lineHeight: 1.8 }}>
                                Seven decades of trusted metals trading from the heart of Old Delhi.
                            </p>
                            <div style={{ marginTop: 10, fontSize: ".68rem", color: "#0F3630", fontFamily: "'Rajdhani',sans-serif", letterSpacing: ".08em" }}>GSTIN: {CO.gstin}</div>
                        </div>
                        <div className="div" style={{ marginBottom: 24 }} />
                        {/* Quick links */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
                            <div>
                                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, letterSpacing: ".18em", fontSize: ".6rem", color: "#C8A84B", marginBottom: 14, textTransform: "uppercase" }}>Pages</div>
                                {NAV.map(l =>
                                    <Link key={l} href={l.toLowerCase()}>
                                        <div style={{ color: "#154038", fontSize: ".8rem", marginBottom: 9, cursor: "pointer" }}>{l}
                                        </div>
                                    </Link>
                                )}
                            </div>
                            <div>
                                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, letterSpacing: ".18em", fontSize: ".6rem", color: "#C8A84B", marginBottom: 14, textTransform: "uppercase" }}>Contact</div>
                                {[
                                    { label: "Mobile", val: CO.mobile },
                                    { label: "Phone", val: CO.phone },
                                    { label: "Email", val: CO.email },
                                ].map(c => (
                                    <div key={c.label} style={{ marginBottom: 10 }}>
                                        <div style={{ fontSize: ".52rem", letterSpacing: ".15em", color: "#0F3630", fontFamily: "'Rajdhani',sans-serif", textTransform: "uppercase" }}>{c.label}</div>
                                        <div style={{ color: "#1D5048", fontSize: ".77rem" }}>{c.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="div" style={{ marginBottom: 18 }} />
                        <div style={{ color: "#0C2E2A", fontSize: ".65rem", letterSpacing: ".07em", fontFamily: "'Rajdhani',sans-serif", textAlign: "center" }}>
                            © 2026 DRPS JAIN EXIM INDIA · EST. {CO.est}
                        </div>
                    </div>
                ) : (
                    /* Desktop footer – 4-col */
                    <div>
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr", gap: 60, marginBottom: 50 }}>
                            <div>
                                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: ".16em", color: "#C8A84B", marginBottom: 4 }}>DRPS JAIN EXIM INDIA</div>
                                <div style={{ fontSize: ".58rem", letterSpacing: ".22em", color: "#8B6914", fontFamily: "'Rajdhani',sans-serif", marginBottom: 14 }}>ESTABLISHED {CO.est}</div>
                                <div className="div" style={{ marginBottom: 18, width: 90 }} />
                                <p style={{ color: "#D3D3D3", fontSize: ".82rem", lineHeight: 1.85, maxWidth: 280 }}>Seven decades of trusted metals trading from the heart of Old Delhi. Supplying non-ferrous and specialty metals to industry across India and beyond.</p>
                            </div>
                            {[
                                { title: "Navigation", items: NAV.map(n => ({ label: n, action: () => router.push(n.toLocaleLowerCase()) })) },
                                { title: "Metals", items: METALS.slice(0, 6).map(m => ({ label: m.name, action: null })) },
                                {
                                    title: "Contact", items: [
                                        { label: CO.address, action: null },
                                        { label: CO.mobile, action: null },
                                        { label: CO.phone, action: null },
                                        { label: CO.email, action: null },
                                    ]
                                },
                            ].map(col => (
                                <div key={col.title}>
                                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, letterSpacing: ".2em", fontSize: ".6rem", color: "#C8A84B", marginBottom: 18, textTransform: "uppercase" }}>{col.title}</div>
                                    {col.items.map(it => (
                                        <div key={it.label} style={{ color: "#D3D3D3", fontSize: ".8rem", marginBottom: 9, cursor: it.action ? "pointer" : "default", lineHeight: 1.5 }}
                                            onClick={() => it.action && it.action()}>{it.label}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="div" style={{ marginBottom: 20 }} />
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                            <div style={{ color: "#38dac7", fontSize: ".66rem", letterSpacing: ".08em", fontFamily: "'Rajdhani',sans-serif" }}>© 2026 DRPS JAIN EXIM INDIA. ALL RIGHTS RESERVED.</div>
                            <div style={{ color: "#38dac7", fontSize: ".66rem", letterSpacing: ".08em", fontFamily: "'Rajdhani',sans-serif" }}>GSTIN: {CO.gstin} · EST. {CO.est}</div>
                        </div>
                    </div>
                )}
            </div>
        </footer >
    );
}