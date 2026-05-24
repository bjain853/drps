import Image from 'next/image';
import logo from "../public/logo.svg";
import useIsMobile from '../hooks/useIsMobile';

export default function Logo() {
    const { isMobile } = useIsMobile();
    return (
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <span style={{ marginTop: '20px', marginBottom: '10px' }}>
                <Image
                    loading='eager'
                    src={logo}
                    height={100}
                    width={80}
                    alt="Logo of the company" />
            </span>
            <div>
                <div className='logo-text' style={{

                }}>DRPS JAIN EXIM INDIA</div>
            </div>
        </div>
    );
}