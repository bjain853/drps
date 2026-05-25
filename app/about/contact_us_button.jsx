"use client";

import Link from "next/link";

export default function ContactUsButton() {

    return (
        <button className="gbtn" style={{ padding: "15px 44px" }}>
            <Link href="/contact">
                Get in Touch
            </Link>
        </button>
    );
}