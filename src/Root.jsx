import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useEffect } from 'react';
import useStore from '../store';
import supabase from './supaBaseClient';

const Root = () => {
  const loc = useLocation();
  const { setSession, setUser } = useStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

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