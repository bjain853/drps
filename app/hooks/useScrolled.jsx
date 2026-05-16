'use client';

import { useState } from "react";

export default function useScrolled() {
    const [scrolled, setScrolled] = useState(false);

    return [scrolled, setScrolled];
}