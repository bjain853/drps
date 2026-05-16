'use client';

import Link from 'next/link';

import { CO } from '../constants';
import useIsMobile from '../hooks/useIsMobile';

export default function AboutPage() {

    const isMobile = useIsMobile();

    const timeline = [
        { year: "1954", event: "Business founded in Sadar Bazar, Delhi, trading base metals under the founding family name." },
        { year: "1970s", event: "Expanded into specialty metals including tin and antimony to serve India's growing manufacturing sector." },
        { year: "1990s", event: "Broadened export activity and established supply relationships with international smelters and refiners." },
        { year: "2000s", event: "Restructured and rebranded progressively; strengthened focus on purity verification and documentation." },
        { year: "Today", event: "Operating as DRPS Jain Exim India — seven decades of heritage, ten metals, one trusted name." },
    ];

    return (
        <div style={{ padding: isMobile ? "50px 20px 60px" : "80px 40px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>

                {/* Header */}
                <div style={{ marginBottom: isMobile ? 48 : 72 }}>
                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 14 }}>Our Story</div>
                    <h1 style={{ fontSize: isMobile ? "clamp(2rem,8vw,2.6rem)" : "clamp(2.5rem,5vw,4.2rem)", fontWeight: 300, letterSpacing: "-.02em", lineHeight: 1.1 }}>
                        Seven Decades of<br /><em style={{ color: "#C8A84B" }}>Trading Excellence</em>
                    </h1>
                </div>
                <div className="div" style={{ marginBottom: isMobile ? 40 : 72 }} />

                {/* Intro */}
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 80, marginBottom: isMobile ? 56 : 90 }}>
                    <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: 18, color: "#E0C06A" }}>A family legacy, built trade by trade.</h3>
                        <p style={{ color: "#4A7A72", lineHeight: 1.9, fontSize: ".93rem", marginBottom: 16 }}>
                            DRPS Jain Exim India traces its roots to 1954, when the Jain family began trading non-ferrous metals from Bara Tooti Chowk in Sadar Bazar — one of North India's most storied wholesale markets. Over seven decades the enterprise grew, evolved, and adapted, operating under various names before consolidating under the DRPS Jain banner.
                        </p>
                        <p style={{ color: "#4A7A72", lineHeight: 1.9, fontSize: ".93rem" }}>
                            Through every iteration, the founding values remained constant: honest dealing, quality goods, and relationships built on trust.
                        </p>
                    </div>
                    <div>
                        <p style={{ color: "#4A7A72", lineHeight: 1.9, fontSize: ".93rem", marginBottom: 16 }}>
                            Today we supply ten non-ferrous and specialty metals to manufacturers, fabricators, and traders across India and internationally. Our GST-registered operations and documented supply chains give institutional buyers the compliance assurance they need.
                        </p>
                        <div style={{ display: "inline-flex", gap: 12, alignItems: "center", border: "1px solid #154038", padding: "10px 16px", background: "#082220", flexWrap: "wrap" }}>
                            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: ".55rem", letterSpacing: ".2em", color: "#8B6914", textTransform: "uppercase" }}>GSTIN</div>
                            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, fontSize: isMobile ? ".78rem" : ".85rem", color: "#C8A84B", letterSpacing: ".06em", wordBreak: "break-all" }}>{CO.gstin}</div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div style={{ marginBottom: isMobile ? 56 : 90 }}>
                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 32 }}>Our Journey</div>
                    <div style={{ position: "relative", paddingLeft: isMobile ? 28 : 40 }}>
                        <div style={{ position: "absolute", left: isMobile ? 8 : 10, top: 8, bottom: 8, width: 1, background: "linear-gradient(to bottom,#C8A84B44,#C8A84B,#C8A84B44)" }} />
                        {timeline.map((t, i) => (
                            <div key={i} style={{ position: "relative", marginBottom: i < timeline.length - 1 ? 36 : 0, paddingLeft: isMobile ? 20 : 28 }}>
                                <div style={{ position: "absolute", left: isMobile ? -24 : -35, top: 5, width: 9, height: 9, borderRadius: "50%", background: i === timeline.length - 1 ? "#C8A84B" : "#082220", border: "1px solid #C8A84B" }} />
                                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: ".95rem", letterSpacing: ".1em", color: "#C8A84B", marginBottom: 5 }}>{t.year}</div>
                                <p style={{ color: "#4A7A72", fontSize: ".88rem", lineHeight: 1.75, maxWidth: 640 }}>{t.event}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div style={{ background: "#082220", border: "1px solid #154038", padding: isMobile ? "28px 20px" : "52px 56px", marginBottom: isMobile ? 48 : 80 }}>
                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 32 }}>What We Stand For</div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 32 : 44 }}>
                        {[
                            { t: "Verified Quality", i: "◈", d: "Every parcel we supply carries documentation traceable to source. We verify purity and specification before dispatch to protect your production line." },
                            { t: "Decades of Trust", i: "◎", d: "Since 1954, generations of buyers have returned to the Jain name for consistent supply, honest pricing, and reliable follow-through on commitments." },
                            { t: "Market Knowledge", i: "◇", d: "Seventy years in Sadar Bazar — one of India's oldest metals trading centres — means deep price intelligence and sourcing networks others simply cannot match." },
                        ].map(v => (
                            <div key={v.t}>
                                <div style={{ fontSize: "1.4rem", color: "#C8A84B", marginBottom: 12 }}>{v.i}</div>
                                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, fontSize: "1rem", letterSpacing: ".05em", marginBottom: 12, color: "#E0C06A" }}>{v.t}</div>
                                <p style={{ color: "#2A6A60", fontSize: ".84rem", lineHeight: 1.8 }}>{v.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <Link href="/contact">
                        <button className="gbtn" style={{ padding: "15px 44px" }} >Get in Touch</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
