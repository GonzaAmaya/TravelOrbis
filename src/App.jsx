import Navbar from './Navbar'
import { useState } from 'react'
import DestacadosSection from './assets/destinos-destacados/destinos'
import PaisesSection from './assets/paises-main/paises'
import ReservaSection from './assets/reservas-main/reserva'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <DestacadosSection />
      <PaisesSection />
      <ReservaSection />

      </>
  );
}

export default App
