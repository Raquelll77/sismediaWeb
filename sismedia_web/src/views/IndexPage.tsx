import ContactoComponent from "../components/ContactoComponent";
import PlanesSuscripcionComponent from "../components/PlanesSuscripcionComponent";
import TestimonioComponent from "../components/TestimonioComponent";
import Caracteristicas from "./Caracteristicas";

export default function IndexPage() {
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                <h1 className="text-7xl text-blue-800 font-bold leading-tight">
                    Transforma tu práctica médica con nuestro sistema de expediente dígital e inteligencia artificial
                </h1>
                <h3 className="text-4xl mt-8">
                    Optimiza la gestión de tus pacientes con nuestra solución innovadora impulsada por IA
                </h3>
                <button className="bg-blue-800 text-white px-6 py-4 mt-10 text-2xl font-bold rounded-lg hover:cursor-pointer hover:bg-cyan-600">Prueba Gratis</button>
                </div>
                <img className="col-span-5" src="HistorialMedicoHeader.jpg" alt="historial-medico" />
            </div>
            <Caracteristicas />
            <PlanesSuscripcionComponent/>
            <div className="mx-auto grid grid-cols-2 mt-20">
                <TestimonioComponent/>
                <ContactoComponent />
            </div>
            
        
        </>
    );
  }
  