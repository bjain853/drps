'use client';

import { useState } from "react";

export default function useMenuOpen() {
    const [menuOpen, setMenuOpen] = useState(false);

    return [menuOpen, setMenuOpen];
}