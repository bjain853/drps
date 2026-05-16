'use client';

import { Suspense } from 'react';

import useIsMobile from "../hooks/useIsMobile";
import ContactForm from './form';
import InformationCard from './information_card';

export default function ContactPage() {

    const isMobile = useIsMobile();


    return (
        <div style={{ padding: isMobile ? "50px 20px 60px" : "80px 40px" }}>
            <div style={{
                maxWidth: 1160, margin: "0 auto", display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
                gap: isMobile ? 40 : 80, alignItems: "start"
            }}>
                <InformationCard />
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm />
                </Suspense>
            </div>
        </div>

    );
}
