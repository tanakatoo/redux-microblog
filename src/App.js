
import { useState } from 'react';
import './App.css';
import MyRoutes from "./MyRoutes"
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const linkToHome = "/"

  return (
    <div className="App">
      <NavBar />
      <MyRoutes linkToHome={linkToHome} />
    </div>
  );
}

export default App;
