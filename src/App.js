import React from 'react';
import Layout from './components/layout/Layout';
import Page404 from './pages/404/Page404';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Placeholder from './pages/placeholder/Placeholder';
import Bookings from './pages/booking/Bookings';
import ConfirmedBooking from './pages/booking/ConfirmedBooking';
import routes from './utils/routes';


function App() {
  const { home, about, menu, bookings, confirmedBooking, orderOnline, login } = routes;

  return (
    <>
      <Layout>
        <Routes>
            <Route path={home.path} element={<Home/>} />
            <Route path={about.path} element={<Placeholder />} />
            <Route path={menu.path} element={<Placeholder />} />
            <Route path={bookings.path} element={<Bookings/>} />
            <Route path={confirmedBooking.path} element={<ConfirmedBooking />} />
            <Route path={orderOnline.path} element={<Placeholder />} />
            <Route path={login.path} element={<Placeholder />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>    
    </>
  );
}

export default App;