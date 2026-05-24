'use client';

import { useState } from 'react';
import { useSearchParams } from "next/navigation";

import useIsMobile from "../hooks/useIsMobile";
import { sendEmail } from "../actions/sendEmail";
import { METALS } from "../constants";
import { useToast } from "../components/toast";
import useSent from "../hooks/useSent";





export default function ContactForm() {

    const isMobile = useIsMobile();
    const searchParams = useSearchParams();
    const searchedMetal = searchParams.get("metal")
    const [form, setForm] = useState({ name: "", company: "", email: "", metal: searchedMetal == null ? "" : searchedMetal, message: "" });
    const [sent, setSent] = useSent();
    const { showToast } = useToast();

    if (sent) return (
        <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px", textAlign: "center" }}>
            <div>
                <div style={{ fontSize: "2.8rem", color: "#C8A84B", marginBottom: 20 }}>◆</div>
                <h2 style={{ fontSize: isMobile ? "2rem" : "2.4rem", fontWeight: 300, marginBottom: 14 }}>Enquiry Received</h2>
                <p style={{ color: "#4A7A72", marginBottom: 32, maxWidth: 400, margin: "0 auto 32px", fontSize: ".92rem", lineHeight: 1.8 }}>
                    Thank you for contacting DRPS Jain Exim India. We will get back to you promptly — typically within the same business day.
                </p>
                <button className="obtn" style={{ padding: "13px 32px" }} onClick={() => setSent(false)}>Send Another</button>
            </div>
        </div>)
    else
        return (
            <form>
                <div style={{ background: "#082220", border: "1px solid #154038", padding: isMobile ? "24px 18px" : "44px" }}>
                    <div style={{ fontFamily: "'Lato','Rajdhani',sans-serif", fontWeight: 700, fontSize: ".8rem", letterSpacing: ".26em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 28 }}>Send an Enquiry</div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                        {[
                            { k: "name", label: "Your Name", type: "text", ph: "Rajesh Kumar" },
                            { k: "company", label: "Company", type: "text", ph: "Your Firm Name" },
                        ].map(f => (
                            <div key={f.k}>
                                <label style={{ display: "block", fontSize: ".55rem", letterSpacing: ".2em", color: "#2A6A60", textTransform: "uppercase", fontFamily: "'Rajdhani',sans-serif", marginBottom: 6 }}>{f.label}</label>
                                <input type={f.type} placeholder={f.ph} value={form[f.k]}
                                    onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                                    style={{ padding: "12px 14px" }} />
                            </div>
                        ))}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", fontSize: ".55rem", letterSpacing: ".2em", color: "#2A6A60", textTransform: "uppercase", fontFamily: "'Rajdhani',sans-serif", marginBottom: 6 }}>Email Address</label>
                        <input type="email" placeholder="your@email.com" value={form.email}
                            onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                            style={{ padding: "12px 14px" }} />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", fontSize: ".55rem", letterSpacing: ".2em", color: "#2A6A60", textTransform: "uppercase", fontFamily: "'Rajdhani',sans-serif", marginBottom: 6 }}>Metal of Interest</label>
                        <select value={form.metal} onChange={e => setForm(p => ({ ...p, metal: e.target.value }))} style={{ padding: "12px 14px" }}>
                            <option value="">Select a metal...</option>
                            {METALS.map(m => <option key={m.id} value={m.id}>{m.name} ({m.symbol})</option>)}
                            <option value="multiple">Multiple / Other</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: 26 }}>
                        <label style={{ display: "block", fontSize: ".55rem", letterSpacing: ".2em", color: "#2A6A60", textTransform: "uppercase", fontFamily: "'Rajdhani',sans-serif", marginBottom: 6 }}>Your Message</label>
                        <textarea rows={isMobile ? 4 : 5} placeholder="Describe your requirement — metal, quantity, grade, delivery location, etc."
                            value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                            style={{ padding: "12px 14px", resize: "vertical" }} />
                    </div>
                    <button
                        onClick={async () => {
                            setSent(true);
                            setForm({ name: "", company: "", email: "", metal: "", message: "" });
                            const { success, error } = await sendEmail(form);
                            if (error) {
                                showToast("error", "Submission failed", "Please check your details and try again.");
                            } else if (success) {
                                showToast("success", "Enquiry sent!", "We'll respond within one business day.");
                            }

                        }}
                        className="gbtn" style={{ width: "100%", padding: "16px", fontSize: ".78rem" }}
                        disabled={!form.name || !form.email || !form.message}>
                        Submit Enquiry
                    </button>
                </div>
            </form>
        )
}