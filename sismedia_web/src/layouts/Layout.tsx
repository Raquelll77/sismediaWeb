import {Outlet} from 'react-router-dom'
import Header from '../components/header'
export default function Layout() {


  return (
    <>
        <Header />
        <main className='mx-auto py-16 px-15'>
         <Outlet />
        </main>
        {/* <Modal />
        <Notification /> */}
    </>
    
  )
}
