'use client';

import { useState } from "react";

export default function useSent() {
    const [sent, setSent] = useState(false);

    return [sent, setSent];
}