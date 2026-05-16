'use client'

import useIsMobile from "../hooks/useIsMobile";
import { CO } from "../constants";

export default function InformationCard() {

    const isMobile = useIsMobile();

    return (
        <div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 14 }}>Get in Touch</div>
            <h1 style={{ fontSize: isMobile ? "clamp(2rem,8vw,2.5rem)" : "clamp(2rem,4vw,3.2rem)", fontWeight: 300, letterSpacing: "-.02em", lineHeight: 1.1, marginBottom: 24 }}>
                Talk to the<br /><em style={{ color: "#C8A84B" }}>Team</em>
            </h1>
            <div className="div" style={{ marginBottom: 28, width: 110 }} />
            <p style={{ color: "#4A7A72", lineHeight: 1.9, marginBottom: 32, fontSize: ".88rem" }}>
                Whether you need pricing, availability, or just want to discuss a requirement, reach us directly — we have been answering trade enquiries from this address since 1954.
            </p>
            {/* Quick-tap links on mobile */}
            {isMobile && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 32 }}>
                    <a href={`tel:${CO.mobile}`} className="gbtn" style={{ padding: "13px", textAlign: "center", textDecoration: "none", display: "block", fontSize: ".7rem" }}>📱 Call Us</a>
                    <a href={`mailto:${CO.email}`} className="obtn" style={{ padding: "13px", textAlign: "center", textDecoration: "none", display: "block", fontSize: ".7rem" }}>✉ Email Us</a>
                </div>
            )}
            {[
                { icon: "📍", label: "Address", value: CO.address },
                { icon: "📱", label: "Mobile", value: CO.mobile, href: `tel:${CO.mobile}` },
                { icon: "☎", label: "Landline", value: CO.phone, href: `tel:${CO.phone}` },
                { icon: "✉", label: "Email", value: CO.email, href: `mailto:${CO.email}` },
                { icon: "◈", label: "GSTIN", value: CO.gstin },
                { icon: "◇", label: "Trading Hours", value: "Mon–Sat, 11:00 AM – 7:00 PM IST" },
            ].map(c => (
                <div key={c.label} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
                    <div style={{ color: "#C8A84B", fontSize: ".85rem", marginTop: 2, width: 20, flexShrink: 0, fontFamily: "sans-serif" }}>{c.icon}</div>
                    <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: ".55rem", letterSpacing: ".2em", color: "#154038", fontFamily: "'Rajdhani',sans-serif", textTransform: "uppercase", marginBottom: 3 }}>{c.label}</div>
                        {c.href ? (
                            <a href={c.href} style={{ fontSize: ".86rem", color: "#8BB4B0", lineHeight: 1.5, textDecoration: "none", display: "block", wordBreak: "break-word" }}>{c.value}</a>
                        ) : (
                            <div style={{ fontSize: ".86rem", color: "#8BB4B0", lineHeight: 1.5, wordBreak: "break-word" }}>{c.value}</div>
                        )}
                    </div>
                </div>
            ))}
        </div>

    )
}