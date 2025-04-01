export default function ContactoComponent() {
  return (

    <div className="mx-auto container">
      <h1 className="text-5xl font-bold text-center mb-15">Contactanos</h1>
      <form action="" className="flex flex-col mx-20 space-y-4">
        <input className="p-6 border-2 border-gray-300 w-full text-2xl rounded-lg" type="text" placeholder="Nombre" />
        <input className="p-6 border-2 border-gray-300 w-full text-2xl rounded-lg" type="text" placeholder="Correo Electronico" />
        <textarea className="px-6 pt-6 pb-25 border-2 border-gray-300 w-full text-2xl rounded-lg" name="" id="" placeholder="Mensaje">

        </textarea>
        <button type="submit" className="bg-blue-800 text-white px-6 py-4 mt-10 text-2xl font-bold rounded-lg hover:cursor-pointer hover:bg-cyan-600 ml-auto">Enviar Mensaje</button>
      </form>
    </div>
  )
}


