import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Host from './pages/Host';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Layout from './components/Layout';
import "./server";
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansPricing from './pages/Host/HostVans/HostVansDetail/HostVansPricing';
import HostDetailsLayout from './components/HostDetailsLayout';
import HostVansPhotos from './pages/Host/HostVans/HostVansDetail/HostVansPhotos';
import HostVansDetails from './pages/Host/HostVans/HostVansDetail/HostVansDetails';
import NotFound from './components/NotFound';

function App() {
  const [selectedVan, setSelectedVan] = useState(null);

  const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans setSelectedVan={setSelectedVan} />} loader={vansLoader} />
          <Route path='vans/:id' element={<VanDetail selectedVan={selectedVan} setSelectedVan={setSelectedVan} />} />
          
          <Route path='/host' element={<HostLayout />} >
            <Route index element={<Host />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />

            <Route path='vans/:id' element={<HostDetailsLayout />}>
              <Route index element={<HostVansDetails />} />
              <Route path='pricing' element={<HostVansPricing />} />
              <Route path='photos' element={<HostVansPhotos />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
  ));

  return (
    <RouterProvider router={router} />
  )
}

export default App
