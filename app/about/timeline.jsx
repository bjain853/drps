export default function Timeline() {

    const timeline = [
        { year: "1954", event: "Business founded in Sadar Bazar, Delhi, trading base metals under the founding family name." },
        { year: "1970s", event: "One stop shop for all and any non-ferrous metal across North India." },
        { year: "2000s", event: "Expanded into specialty metals including tin and antimony to serve India's growing manufacturing sector." },
        { year: "2020s", event: "Restructured and rebranded progressively; focus on moving beyond just trading and becoming a strategic partner for the clients." },
        { year: "Today", event: "Operating as DRPS Jain Exim India — seven decades of heritage, ten metals, one trusted name." },
    ];


    return (
        <div className="timeline-container">
            <div style={{ fontFamily: "", fontSize: ".6rem", letterSpacing: ".38em", color: "#C8A84B", textTransform: "uppercase", marginBottom: 32 }}>Our Journey</div>
            <div className="timeline-divider">
                <div className="timeline-line" />
                {timeline.map((t, i) => (
                    <div className="timeline-item-container" key={i} style={{ marginBottom: i < timeline.length - 1 ? 36 : 0 }}>
                        <div className='timeline-item' style={{ background: i === timeline.length - 1 ? "#C8A84B" : "#082220", }} />
                        <div style={{ fontFamily: "", fontWeight: 700, fontSize: ".95rem", letterSpacing: ".1em", color: "#C8A84B", marginBottom: 5 }}>{t.year}</div>
                        <p style={{ color: "#f8faf9", fontSize: ".88rem", lineHeight: 1.75, maxWidth: 640 }}>{t.event}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}