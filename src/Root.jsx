import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const Root = () => {
  const loc = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {
        loc.pathname == '/' ? <Footer /> : <></>
      }
    </>
  )
}

export default Root