import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Items from './screens/Items';
import AddNewProduct from './screens/AddNewProduct';
import Nav from './components/Nav';
import Clothe from './screens/Items/Clothe';
import Electrical from './screens/Items/Electrical';
import Perfumes from './screens/Items/Perfumes';
import MyFavorite from './components/MyFavorite'
import MyFavoriteElectrical from './components/MyFavoriteElectrical';
import MyFavoritePerfumes from './components/MyFavoritePerfumes';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  <BrowserRouter>
  <Nav/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/items' element={<Items/>}>
          <Route path='/items/clothe' element={<Clothe/>}>
              <Route path=':clotheName' element={<MyFavorite/>}/>
              </Route>

              <Route path='/items/electrical' element={<Electrical/>}>
              <Route path=':electricalName' element={<MyFavoriteElectrical/>}/>
          </Route>

          <Route path='/items/perfumes' element={<Perfumes/>}>
              <Route path=':perfumesName' element={<MyFavoritePerfumes/>}/>
          </Route>
          </Route>

       

      <Route path='/AaddNewProduct' element={<AddNewProduct/>}/>
      
      <Route path='*' element={<h3 className='alert alert-danger text-center'>
        404 - PAGE NOT FOUND</h3>}/>
        
    </Routes>
  </BrowserRouter>
  <br></br>  <br></br> <br></br>


  <Footer/>

    </React.StrictMode>

);

  

