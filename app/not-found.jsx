import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="error-container">
            {/* Elegant, faded background watermark geometry */}
            <div className="error-watermark">404</div>

            <div className="error-content">
                <div className="error-tag">Error Code 404</div>

                <h1 className="error-title">
                    Material <br />
                    <em style={{ fontStyle: "italic", color: "#C8A84B" }}>Not Located</em>
                </h1>

                <div className="error-divider" />

                <p className="error-message">
                    The specification, grade, or page you are looking for is currently unavailable, out of scope, or has been relocated within our portfolio archives.
                </p>

                <div className="error-actions">
                    <Link href="/" className="gbtn">
                        Return to Home
                    </Link>
                    <Link href="/products" className="obtn">
                        View Metals Portfolio
                    </Link>
                </div>
            </div>
        </div>
    )
}