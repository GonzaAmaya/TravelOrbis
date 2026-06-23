import { useState, useEffect } from "react";
import "./reserva.css";

function Reservas() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
    fetch("/reservas/reserva.json")
        .then(res => res.json())
        .then(data => setCategorias(data));
    }, []);

    return (
    <section id="reservas">
        <div className="titulo">
        <h2>Prepara tu viaje</h2>
        </div>
        {categorias.map((cat, i) => (
        <div className={`reservas__categoria reservas__categoria--${cat.categoria.toLowerCase()}`} key={i}>
            <h3>{cat.categoria}</h3>
            <div className="reservas__grid">
            {cat.items.map((item, j) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={j}>
                <div className="reserva__card">
                    <img src={item.logo} alt={item.nombre} />
                    <p>{item.nombre}</p>
                </div>
                </a>
            ))}
            </div>
        </div>
        ))}
    </section>
    );
}

export default Reservas;