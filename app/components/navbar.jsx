'use client';

import Link from 'next/link';

import Logo from '../components/logo';
import { NAV } from '../constants';
import useIsMobile from '../hooks/useIsMobile';
import useMenuOpen from '../hooks/useMenuOpen';
import useScrolled from '../hooks/useScrolled';
import usePage from '../hooks/usePage';

export default function Navbar() {

    const isMobile = useIsMobile();
    const [menuOpen, setMenuOpen] = useMenuOpen();
    const [scrolled] = useScrolled();
    const [page] = usePage();

    return (
        <nav style={{
            background: scrolled || menuOpen ? "black" : "rgba(6,26,24,.98)",
            backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
            borderBottom: scrolled || menuOpen ? "1px solid #0C2E2A" : "none",

        }}>
            <div className='nav-container'>
                <Link href="/">
                    <Logo />
                </Link>
                {!isMobile && (
                    <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
                        {NAV.map(n =>
                            <Link key={n} href={n.toLowerCase()} >
                                <span className={`nl ${page === n ? "on" : ""}`}> {n}</span>
                            </Link>
                        )}
                        <Link href="/contact">
                            <button className="gbtn" style={{ padding: "15px 22px" }}> Enquire</button>
                        </Link>
                    </div>
                )}

                {isMobile && (
                    <>
                        <button className={`hbg ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
                            <span />
                            <span />
                            <span />
                        </button>
                        {menuOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '70px',
                                left: 0,
                                right: 0,
                                backgroundColor: '#000000b2',
                                zIndex: 101,
                                padding: '10px 20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            }}>
                                {NAV.map(n => (
                                    <Link key={n} href={n.toLowerCase()}>
                                        <span className={`nl ${page === n ? "on" : ""}`}>{n}</span>
                                    </Link>
                                ))}
                                <Link href="/contact">
                                    <button className="gbtn" style={{ padding: "10px 22px" }}> Enquire</button>
                                </Link>
                            </div>
                        )}
                    </>
                )}

            </div>
        </nav >)

};
