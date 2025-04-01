export default function PlanesSuscripcionComponent() {
  return (
    <div className="mx-auto container">
        <h1 className="text-6xl text-center font-bold mt-5">Planes de Suscripción</h1>

        <div className="grid grid-cols-3 gap-20 mt-20">

            <div className="text-center border-2 border-gray-300 rounded-lg p-6 shadow-lg hover:scale-115 transition-transform duration-400">
                <h1 className="text-3xl font-medium my-2" >Plan Básico</h1>
                <p className="text-xl"><span className="text-8xl font-bold">$29</span>/mes</p>
                <p className="text-2xl my-2">Funciones esenciales para pequeñas practicas</p>
                <button className="bg-blue-800 text-white text-2xl my-5 px-5 py-2 rounded-lg font-medium hover:cursor-pointer hover:bg-cyan-600">Comenzar</button>
            </div>

            <div className="text-center border-2 border-gray-300 rounded-lg p-6 shadow-lg hover:scale-115 transition-transform duration-400">
                <h1 className="text-3xl font-medium my-2" >Plan Profesional</h1>
                <p className="text-xl"><span className="text-8xl font-bold">$59</span>/mes</p>
                <p className="text-2xl my-2">Herramientas avanzadas y análisis de IA</p>
                <button className="bg-blue-800 text-white text-2xl my-5 px-5 py-2 rounded-lg font-medium hover:cursor-pointer hover:bg-cyan-600">Comenzar</button>
            </div>

            <div className="text-center border-2 border-gray-300 rounded-lg p-6 shadow-lg hover:scale-115 transition-transform duration-400">
                <h1 className="text-3xl font-medium my-2" >Plan Empresarial</h1>
                <p className="text-xl"><span className="text-8xl font-bold">$99</span>/mes</p>
                <p className="text-2xl my-2">Para grandes instituciones caracteristicas premiun</p>
                <button className="bg-blue-800 text-white text-2xl my-5 px-5 py-2 rounded-lg font-medium hover:cursor-pointer hover:bg-cyan-600">Comenzar</button>
            </div>

        </div>
    </div>
  )
}
