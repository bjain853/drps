import "./index.css";

export default function Loading() {
    // Or a custom loading skeleton component
    return (<div className="loader-container">
        <div className="luxury-spinner">
            <span></span>
            <span></span>
        </div>
        <div className="loader-text">DRPS JAIN EXIM</div>
    </div>);
}