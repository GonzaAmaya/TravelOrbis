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
        <div className="reservas__categoria" key={i}>
            <h3>{cat.categoria}</h3>
            <div className="reservas__grid">
            {cat.items.map((item, j) => (
                <div className="reserva__card" key={j}>
                <img src={item.logo} alt={item.nombre} />
                <p>{item.nombre}</p>
                </div>
            ))}
            </div>
        </div>
        ))}
    </section>
    );
}

export default Reservas;