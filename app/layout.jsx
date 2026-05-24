import Navbar from "./components/navbar";
import Ticker from "./components/ticker";
import Footer from "./components/footer";
import { ToastContainer, ToastProvider } from "./components/toast";
import "./index.css";

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <head>
                <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Rajdhani:wght@400;500;600;700&display=swap');
                      `}</style>
            </head>
            <body>
                <div className="root-div">
                    <ToastProvider>
                        <Navbar />
                        <Ticker />
                        <ToastContainer />
                        {children}
                        <Footer />
                    </ToastProvider>
                </div>
            </body>
        </html>
    )
}
