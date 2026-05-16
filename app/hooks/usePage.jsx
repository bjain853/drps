'use client';

import { useState } from "react";

export default function usePage() {
    const [page, setPage] = useState("Home");

    return [page, setPage];
}