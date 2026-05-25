"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import Logo from '../components/logo';
import { NAV } from '../constants';

export default function Navbar({ }) {

    const pathname = usePathname();

    const [page, setPage] = useState("Home");

    useEffect(() => {
        switch (pathname) {
            case "/about":
                setPage("About");
                break;
            case "/products":
                setPage("Products")
                break;
            case "/contact":
                setPage("Contact");
                break;
            default:
                setPage("Home");
                break;
        }
    }, [pathname]);

    return (
        <nav>
            <div className='nav-container'>
                <label >
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
                    <label className='nl' id="hamburger-icon-close" htmlFor="check">
                        <span>X</span>
                    </label>
                    {NAV.map(n =>
                        <li key={n} className={`nl ${page === n ? "on" : ""}`}>
                            <Link href={n.toLowerCase()}>
                                {n}
                            </Link>
                        </li>
                    )}
                    <li key='contact'>
                        <Link className={`gbtn ${page === "Contact" ? "on" : ""}`} style={{ padding: "15px 22px", color: "#041513" }} href="/contact">
                            Enquire
                        </Link>
                    </li>
                </ul>


            </div>
        </nav >
    )

};
