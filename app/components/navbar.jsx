"use client";

import Link from 'next/link';
import Logo from '../components/logo';
import { NAV } from '../constants';
import usePage from '../hooks/usePage';
import useIsMobile from "../hooks/useIsMobile";


export default function Navbar({ }) {

    const [page, _] = usePage();
    const isMobile = useIsMobile();

    return (
        <nav>
            <div className='nav-container'>
                <label style={{ marginLeft: "15px" }}>
                    <Link href="/">
                        <Logo />
                    </Link>
                </label>
                <input type="checkbox" id="check" />
                <label id="hamburger-icon" htmlFor="check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul className="hamburger-drawer">
                    <div className='nl' id="hamburger-icon-close">
                        <label htmlFor="check">
                            <span>X</span>
                        </label>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: isMobile ? "" : "30px",
                        flexDirection: isMobile ? "column-reverse" : "row",
                        gap: "30px",
                        flexGrow: isMobile ? 2 : ""
                    }}>
                        {
                            NAV.map(n =>
                                <div key={n}>
                                    <li className={`nl ${page === n ? "on" : ""}`}>
                                        <Link href={n.toLowerCase()}>
                                            {n}
                                        </Link>
                                    </li>
                                    <span className="div" />
                                </div>
                            )
                        }
                        <li key="contact">
                            <Link className={`gbtn ${page === "Contact" ? "on" : ""}`} style={{ padding: "15px 2rem", color: "#041513" }} href="/contact">
                                Enquire
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav >
    )

};
