import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Addcar from '../src/components/AddCar';
import Cars from '../src/components/Car/Cars';
import CarDetail from '../src/components/Car/CarDetail';


// all the components that i added to the webpage
function App() {
  return (
<React.Fragment>
  {/* navbar component */}
  <header>
<Header/>
</header>
<main>
  {/* the route to display different parts of the webpage */}
  <Routes>
    {/* webpage used to  add a car */}
    <Route path="/add" element={<Addcar/>} exact/>
    {/* webpage that displays the car */}
    <Route path="/cars" element={<Cars/>} exact/>
    {/* webpage that allows you to edit any aspect of the car */}
    <Route path="/cars/:id" element={<CarDetail />} exact/>
  </Routes>
</main>
</React.Fragment>
      

  );
}

export default App;
