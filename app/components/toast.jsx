'use client';
/**
 * Toast.jsx — DRPS Jain Exim India
 * ─────────────────────────────────────────────────────────────────────────────
 * Self-contained toast notification system styled to match the site's
 * dark-teal base (#061A18) and gold accent (#C8A84B) palette.
 *
 * EXPORTS
 *   ToastProvider   – wrap your App (or root) with this
 *   useToast        – hook that returns { showToast }
 *   ToastContainer  – renders the live toasts (place once inside ToastProvider)
 *
 * USAGE
 * ─────
 * 1. Wrap your app:
 *      <ToastProvider>
 *        <App />
 *        <ToastContainer />
 *      </ToastProvider>
 *
 * 2. Inside any component:
 *      const { showToast } = useToast();
 *      showToast("success", "Enquiry sent!", "We'll respond within one business day.");
 *      showToast("error",   "Submission failed", "Please check your details and try again.");
 *      showToast("info",    "Note", "Optional body text.");      // info variant
 *
 * VARIANTS  →  "success" | "error" | "info"
 * DURATION  →  optional 4th arg in ms (default 4500)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

/* ─── Context ───────────────────────────────────────────────────────────── */
const ToastCtx = createContext(null);

/* ─── Hook ──────────────────────────────────────────────────────────────── */
export function useToast() {
    const ctx = useContext(ToastCtx);
    if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
    return ctx;
}

/* ─── Provider ──────────────────────────────────────────────────────────── */
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    /**
     * showToast(variant, title, body?, duration?)
     *   variant  : "success" | "error" | "info"
     *   title    : string  — bold headline
     *   body     : string  — optional supporting text
     *   duration : number  — ms before auto-dismiss (default 4500)
     */
    const showToast = useCallback((variant, title, body = "", duration = 4500) => {
        const id = Date.now() + Math.random();
        setToasts(prev => [...prev, { id, variant, title, body, duration, visible: true }]);
    }, []);

    const dismiss = useCallback(id => {
        // Mark invisible first (triggers CSS exit), then remove
        setToasts(prev => prev.map(t => t.id === id ? { ...t, visible: false } : t));
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 420);
    }, []);

    return (
        <ToastCtx.Provider value={{ showToast, dismiss, toasts }}>
            {children}
        </ToastCtx.Provider>
    );
}

/* ─── Single Toast item ─────────────────────────────────────────────────── */
function ToastItem({ toast, onDismiss }) {
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => onDismiss(toast.id), toast.duration);
        return () => clearTimeout(timerRef.current);
    }, [toast.id, toast.duration, onDismiss]);

    /* Pause auto-dismiss on hover */
    const pause = () => clearTimeout(timerRef.current);
    const resume = () => {
        timerRef.current = setTimeout(() => onDismiss(toast.id), 1200);
    };

    const cfg = {
        success: {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#C8A84B" strokeWidth="1.4" />
                    <path d="M6 10.5l2.8 2.8 5.2-5.6" stroke="#C8A84B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            accent: "#C8A84B",
            barColor: "linear-gradient(to right,#8B6914,#C8A84B)",
            glowColor: "rgba(200,168,75,0.12)",
        },
        error: {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#E05A4A" strokeWidth="1.4" />
                    <path d="M7 7l6 6M13 7l-6 6" stroke="#E05A4A" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            ),
            accent: "#E05A4A",
            barColor: "linear-gradient(to right,#A03020,#E05A4A)",
            glowColor: "rgba(224,90,74,0.10)",
        },
        info: {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#4ABDB0" strokeWidth="1.4" />
                    <path d="M10 9v5" stroke="#4ABDB0" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="10" cy="6.5" r=".8" fill="#4ABDB0" />
                </svg>
            ),
            accent: "#4ABDB0",
            barColor: "linear-gradient(to right,#1D7A70,#4ABDB0)",
            glowColor: "rgba(74,189,176,0.10)",
        },
    };

    const { icon, accent, barColor, glowColor } = cfg[toast.variant] ?? cfg.info;

    return (
        <div
            onMouseEnter={pause}
            onMouseLeave={resume}
            style={{
                position: "relative",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                background: "#0C2E2A",
                border: `1px solid ${accent}33`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px ${accent}1A, inset 0 0 40px ${glowColor}`,
                padding: "16px 44px 16px 18px",
                minWidth: 300,
                maxWidth: 390,
                overflow: "hidden",
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                pointerEvents: "all",
                /* entry / exit animation driven by .visible class */
                opacity: toast.visible ? 1 : 0,
                transform: toast.visible ? "translateY(0) scale(1)" : "translateY(14px) scale(.96)",
                transition: "opacity .38s cubic-bezier(.4,0,.2,1), transform .38s cubic-bezier(.4,0,.2,1)",
            }}
        >
            {/* Left accent bar */}
            <div style={{
                position: "absolute",
                left: 0, top: 0, bottom: 0,
                width: 3,
                background: barColor,
            }} />

            {/* Icon */}
            <div style={{ flexShrink: 0, marginTop: 1 }}>{icon}</div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: ".82rem",
                    letterSpacing: ".08em",
                    color: accent,
                    textTransform: "uppercase",
                    marginBottom: toast.body ? 4 : 0,
                }}>
                    {toast.title}
                </div>
                {toast.body && (
                    <div style={{
                        fontSize: ".88rem",
                        color: "#6A9E94",
                        lineHeight: 1.55,
                        wordBreak: "break-word",
                    }}>
                        {toast.body}
                    </div>
                )}
            </div>

            {/* Dismiss ✕ */}
            <button
                onClick={() => onDismiss(toast.id)}
                style={{
                    position: "absolute",
                    top: 10, right: 12,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#2A6A60",
                    fontSize: "1rem",
                    lineHeight: 1,
                    padding: "2px 4px",
                    transition: "color .2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = accent}
                onMouseLeave={e => e.currentTarget.style.color = "#2A6A60"}
                aria-label="Dismiss"
            >
                ✕
            </button>

            {/* Progress bar */}
            <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: 2,
                background: "#154038",
            }}>
                <div style={{
                    height: "100%",
                    background: barColor,
                    width: "100%",
                    transformOrigin: "left",
                    animation: `toast-shrink ${toast.duration}ms linear forwards`,
                }} />
            </div>
        </div>
    );
}

/* ─── Container (place once, anywhere inside ToastProvider) ─────────────── */
export function ToastContainer({ position = "bottom-right" }) {
    const { toasts, dismiss } = useToast();

    const posStyle = {
        "top-right": { top: 24, right: 24, bottom: "auto", left: "auto" },
        "top-left": { top: 24, left: 24, bottom: "auto", right: "auto" },
        "top-center": { top: 24, left: "50%", bottom: "auto", right: "auto", transform: "translateX(-50%)" },
        "bottom-right": { bottom: 28, right: 24, top: "auto", left: "auto" },
        "bottom-left": { bottom: 28, left: 24, top: "auto", right: "auto" },
        "bottom-center": { bottom: 28, left: "50%", top: "auto", right: "auto", transform: "translateX(-50%)" },
    }[position] ?? { bottom: 28, right: 24 };

    return (
        <>
            <style>{`
        @keyframes toast-shrink {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>
            <div style={{
                position: "fixed",
                zIndex: 9999,
                display: "flex",
                flexDirection: position.startsWith("top") ? "column" : "column-reverse",
                gap: 10,
                pointerEvents: "none",
                ...posStyle,
            }}>
                {toasts.map(t => (
                    <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
                ))}
            </div>
        </>
    );
}

/* ─── Default export: convenience re-export of everything ───────────────── */
export default { ToastProvider, ToastContainer, useToast };


/* ═══════════════════════════════════════════════════════════════════════════
   HOW TO INTEGRATE INTO metal-trading.jsx
   ═══════════════════════════════════════════════════════════════════════════

   STEP 1 — Import at the top of metal-trading.jsx
   ─────────────────────────────────────────────────
     import { ToastProvider, ToastContainer, useToast } from "./Toast";

   STEP 2 — Wrap your root render with ToastProvider + add ToastContainer
   ─────────────────────────────────────────────────────────────────────────
     // In your App component's return, wrap the outermost <div>:
     return (
       <ToastProvider>
         <div style={{ fontFamily:"'Cormorant Garamond',...  }}>
           ...all your existing JSX...
         </div>
         <ToastContainer position="bottom-right" />   ← add this line
       </ToastProvider>
     );

   STEP 3 — Replace the ContactPage onSubmit handler
   ──────────────────────────────────────────────────
     In App(), add the showToast hook and update your handler:

       const { showToast } = useToast();

       // Replace:   onSubmit={() => setSent(true)}
       // With a real async submit + toast:

       const handleContactSubmit = async () => {
         try {
           // ── Simulate / replace with your real API call ──
           // await fetch("/api/enquiry", { method:"POST", body: JSON.stringify(form) });

           await new Promise(r => setTimeout(r, 800)); // ← remove when wired to real API

           // ── On success ──
           setSent(true);                        // keeps the existing "sent" screen if you want
           setForm({ name:"", company:"", email:"", metal:"", message:"" });
           showToast(
             "success",
             "Enquiry Submitted",
             "Thank you! Our team will respond within one business day.",
             5000
           );
         } catch (err) {
           // ── On failure ──
           showToast(
             "error",
             "Submission Failed",
             "Please check your connection and try again, or call us directly.",
             6000
           );
         }
       };

       // Then pass it:
       <ContactPage ... onSubmit={handleContactSubmit} />

   STEP 4 — Optional: trigger toasts from other places
   ─────────────────────────────────────────────────────
     const { showToast } = useToast();

     // Info toast (e.g. when a user opens a product card)
     showToast("info", "Viewing " + metal.name, "Tap 'Enquire' to request a quote.");

     // All variants
     showToast("success", "Title", "Optional body", 4500);   // gold
     showToast("error",   "Title", "Optional body", 6000);   // red
     showToast("info",    "Title", "Optional body", 4000);   // teal

   AVAILABLE POSITIONS for <ToastContainer position="...">
   ──────────────────────────────────────────────────────────
     "bottom-right"  (default, recommended)
     "bottom-left"
     "bottom-center"
     "top-right"
     "top-left"
     "top-center"
*/