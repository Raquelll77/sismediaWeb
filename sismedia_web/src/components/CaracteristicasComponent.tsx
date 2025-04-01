export default function CaracteristicasComponent() {
  return (
    <div className="mx-20">                  

          <div className="mx-auto">
            <div className="grid grid-cols-4 gap-10 mt-4">
              <div className="flex flex-col items-center justify-center p-30 text-center">
                <img className="w-40 h-40" src="historial-medico-icono-azul.png" alt="historial-medico" />
                <h3 className="mt-2 text-2xl text-center">Gestion eficiente de expediente médico </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-30 text-center">
                <img className="w-40 h-40 items-center" src="cerebro-humano-icono.png" alt="cerebro-humano" />
                <h3 className="mt-2 text-2xl">Diagnosticos realizados por IA</h3>
              </div>
              <div className="flex flex-col items-center justify-center p-30 text-center">
                <img className="w-40 h-40 items-center" src="acceso-remoto-icono.png" alt="acceso-remoto" />
                <h3 className="mt-2 text-2xl">Acceso remoto a los datos</h3>
              </div>
              <div className="flex flex-col items-center justify-center p-30 text-center">
              <img className="w-40 h-40 items-center" src="seguro-icono.png" alt="seguro-icono" />
              <h3 className="mt-2 text-2xl">Seguridad y privacidad</h3>
              </div>
            </div>


            <h1 className="text-6xl text-center font-bold">Características</h1>

            
            <div className="grid grid-cols-3 gap-10">
              <div className="flex flex-col items-center justify-center p-30 text-center">
                <img className="w-40 h-40" src="expediente-medico-icono.png" alt="expediente-medico" />
                <h2 className="mt-2 text-3xl text-center font-bold">Expedientes Medicos Digitales </h2>
                <p className="mt-2 text-2xl text-center">Gestion de informacion clínica de manera segura </p>
              </div>
              <div className="flex flex-col items-center justify-center p-30 text-center">
                <img className="w-40 h-40 items-center" src="cerebro-humano-icono.png" alt="cerebro-humano" />
                <h2 className="mt-2 text-3xl text-center font-bold">Inteligencia Artificial </h2>
                <p className="mt-2 text-2xl text-center">Herramientas avanzadas y recomendaciones sobre posibles tratamientos  </p>
              </div>
              <div className="flex flex-col items-center justify-center p-30 text-center">
                <img className="w-40 h-40 items-center" src="experiencia-de-usuario-icono.png" alt="experiencia-usuario" />
                <h2 className="mt-2 text-3xl text-center font-bold">Interfaz Amigable</h2>
                <p className="mt-2 text-2xl text-center">Navegación intuitiva y fácil de entender, diseñada para cualquier usuario, sin importar su nivel de experiencia </p>
              </div>
            </div>
          </div>
                    

    </div>
    
  )
}
