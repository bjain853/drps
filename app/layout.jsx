'use client';

import Navbar from "./components/navbar";
import Ticker from "./components/ticker";
import Footer from "./components/footer";
import { ToastContainer, ToastProvider } from "./components/toast";
import "./index.css";
import useIsMobile from "./hooks/useIsMobile";
import useMenuOpen from "./hooks/useMenuOpen";
import { NAV, CO } from "./constants";
import usePage from "./hooks/usePage";


export default function RootLayout({
    children,
}) {
    const isMobile = useIsMobile();
    const [menuOpen] = useMenuOpen();
    const [page] = usePage();
    return (
        <html lang="en">
            <head>
                <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Rajdhani:wght@400;500;600;700&display=swap');
                      `}</style>
            </head>
            <body>
                <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", background: "#061A18", minHeight: "100vh", color: "#D4EAE6" }}>
                    <ToastProvider>
                        <Navbar />
                        <Ticker />
                        <ToastContainer />
                        {isMobile && (
                            <div className={`mob-menu ${menuOpen ? "open" : ""}`}>
                                {NAV.map((n, i) => (
                                    <div key={n} onClick={() => router.push(n.toLocaleLowerCase())}
                                        style={{
                                            fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "1.5rem", letterSpacing: ".12em",
                                            color: page === n ? "#C8A84B" : "#4A7A72",
                                            padding: "14px 0", borderBottom: "1px solid #0C2E2A", cursor: "pointer",
                                            transition: "color .2s",
                                            animationDelay: `${i * 0.05}s`
                                        }}>
                                        {n}
                                    </div>
                                ))}
                                <button className="gbtn mob-full" style={{ padding: "16px", marginTop: 32, fontSize: ".85rem" }} onClick={() => router.push("/contact")}>
                                    Send Enquiry
                                </button>
                                {/* Quick contact strip */}
                                <div style={{ marginTop: "auto", paddingTop: 32, borderTop: "1px solid #0C2E2A" }}>
                                    <a href={`tel:${CO.mobile}`} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14, textDecoration: "none" }}>
                                        <span style={{ color: "#C8A84B", fontSize: "1rem" }}>📱</span>
                                        <span style={{ color: "#4A7A72", fontFamily: "'Rajdhani',sans-serif", fontSize: ".85rem" }}>{CO.mobile}</span>
                                    </a>
                                    <a href={`mailto:${CO.email}`} style={{ display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
                                        <span style={{ color: "#C8A84B", fontSize: "1rem" }}>✉</span>
                                        <span style={{ color: "#4A7A72", fontFamily: "'Rajdhani',sans-serif", fontSize: ".85rem" }}>{CO.email}</span>
                                    </a>
                                </div>
                            </div>
                        )}
                        {children}
                        <Footer />
                    </ToastProvider>
                </div>
            </body>
        </html>
    )
}
