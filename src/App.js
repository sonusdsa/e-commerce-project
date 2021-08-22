import React from 'react';
import Navbar from './navbar';
import ImageSlider from './ImageSlider';
import Products from './Products';
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';

const port = process.env.PORT || 8000;

function App() {

  return (
    <>
      <Navbar />

      <div className="App">

        <ImageSlider />
        <Products />
        <Login />
        <SignUp />
        <Footer />


      </div>
    </>
  );
}

export default App;


