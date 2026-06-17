import { useState, useEffect } from "react";
import "./paises.css";

function PaisesSection() {
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        fetch("/paises/paises.json")
        .then(res => res.json())
        .then(data => setPaises(data));
    }, []);

    return (
        <section className="paises" id="paises">
            <h2>Paises</h2>
            <div className="paises__grid" id="grid-paises">
                {paises.map((d, i) => (
                    <div className="card" key={i}>
                        <img src={d.imagen} alt={d.nombre} />
                        <div className="card_info">
                            <h3>{d.nombre}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
    }

    export default PaisesSection;
                            

