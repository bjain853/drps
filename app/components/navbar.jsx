"use client";

import Link from 'next/link';

import Logo from '../components/logo';
import { NAV } from '../constants';
import usePage from '../hooks/usePage';

export default function Navbar() {

    const [page, setPage] = usePage();

    return (
        <nav>
            <div className='nav-container'>
                <label >
                    <Link href="/" onClick={() => setPage("Home")}>
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
                            <Link href={n.toLowerCase()} onClick={() => setPage(n)} >
                                {n}
                            </Link>
                        </li>
                    )}
                    <li key='contact'>
                        <button className="gbtn" style={{ padding: "15px 22px" }} onClick={() => setPage("Contact")}>
                            <Link href="/contact">
                                Enquire
                            </Link>
                        </button>
                    </li>
                </ul>


            </div>
        </nav >
    )

};
