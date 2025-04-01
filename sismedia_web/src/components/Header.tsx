import {NavLink, useLocation} from 'react-router-dom'
export default function Header() {
  return (
    <div className="mx-auto">
        <div className='flex justify-between items-center px-15 pt-1'>
            <img className='w-100' src="LogoSismediaHorizontal.png" alt="logoSismedia" />
            <nav className='flex gap-20 justify-between'>
                        <NavLink to="/" className={({isActive})=>
                            isActive ? 'text-blue-700 uppercase font-bold' : 'text-black uppercase font-bold'
                        }>Inicio</NavLink>
                        <NavLink to="/caracteristicas" className={({isActive})=>
                            isActive ? 'text-blue-700 uppercase font-bold' : 'text-black uppercase font-bold'
                        }>Caracteristicas</NavLink>
                        <NavLink to="/suscripcion" className={({isActive})=>
                            isActive ? 'text-blue-700 uppercase font-bold' : 'text-black uppercase font-bold'
                        }>Planes de Suscripcion</NavLink>
                        <NavLink to="/contactanos" className={({isActive})=>
                            isActive ? 'text-blue-700 uppercase font-bold' : 'text-black uppercase font-bold'
                        }>Contactanos</NavLink>
                        
            </nav>
        </div>

    </div>
  )
}

