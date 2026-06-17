import { useState, useEffect } from "react";
import "./destinos.css";


function DestacadosSection() {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
    fetch("/destinos-destacados/destinos.json")
        .then(res => res.json())
        .then(data => setDestinos(data));
    }, []);

    return (
    <section className="destinos" id="destinos">
        <h2>Destinos Destacados</h2>
        <div className="destinos__grid" id="grid-destinos">
        {destinos.map((d, i) => (
            <div className="card" key={i}>
            <img src={d.imagen} alt={d.nombre} />
            <div className="card_info">
                <h3>{d.nombre}</h3>
                <p>{d.pais}</p>
            </div>
            </div>
        ))}
        </div>
    </section>
    );
}

export default DestacadosSection;