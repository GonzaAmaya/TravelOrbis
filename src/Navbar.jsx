import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../public/logoTravel.webp"; // ajustá esta ruta a tu imagen local

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Logo izquierda */}
      <div className="navbar__logo">
        <img src={logo} alt="TravelOrbis logo" />
      </div>

      {/* Links centro */}
      <ul className="navbar__links">
        <li><a onClick={() => scrollTo("inicio")} className="navbar__link">Inicio</a></li>
        <li><a onClick={() => scrollTo("destinos")} className="navbar__link">Destacados</a></li>
        <li><a onClick={() => scrollTo("paises")} className="navbar__link">Países</a></li>
      </ul>

      {/* Botón derecha */}
      <div className="navbar__cta">
        <a onClick={() => scrollTo("reservas")} className="navbar__btn">Reservar</a>
      </div>
    </nav>
  );
}



