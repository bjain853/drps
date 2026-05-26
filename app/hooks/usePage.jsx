'use client';

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';


export default function usePage() {

    const [page, setPage] = useState("Home");

    const pathname = usePathname();

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


    return [page, setPage];
}