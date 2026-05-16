import Image from 'next/image';
import logo from "../public/logo.svg";
import useIsMobile from '../hooks/useIsMobile';

export default function Logo() {
    const { isMobile } = useIsMobile();
    return (
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <span style={{ marginTop: '20px', marginBottom: '10px' }}>
                <Image
                    src={logo}
                    height={100}
                    width={80}
                    alt="Logo of the company" />
            </span>
            <div>
                <div style={{
                    display: isMobile ? "none" : 'block',
                    fontFamily: "'Merriweather',sans-serif",
                    fontWeight: 800, fontSize: isMobile ? "0.75rem" : "0.9rem",
                    letterSpacing: ".14em",
                    color: "#d6b552",
                    lineHeight: 1.1
                }}>DRPS JAIN EXIM INDIA</div>
            </div>
        </div>
    );
}