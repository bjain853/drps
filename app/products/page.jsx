import { METALS } from '../constants';
import "./products.css";
import ProductClient from './page_client.jsx';

export const metadata = {
    title: 'Non-Ferrous & Specialty Metals Portfolio | DRPS Jain Exim India',
    description: 'Supplying ten non-ferrous and specialty industrial metals in standard and custom lot sizes. View purity ranges, grades, and technical documentation.',
    openGraph: {
        title: 'Industrial Metals Portfolio | DRPS Jain Exim India',
        description: `Explore our catalog of ten non-ferrous and specialty metals available with full purity documentation. Metals include ${METALS} with all grades available`,
        type: 'website',
    }
};


export default async function ProductsPage({ searchParams }) {
    const searchMetalId = (await searchParams)?.metal;
    const searchedMetal = METALS.find((v) => v.id == searchMetalId)
    return (
        <ProductClient searchedMetal={searchedMetal} />
    );
}
