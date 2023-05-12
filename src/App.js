
import { useState } from 'react';
import './App.css';
import MyRoutes from "./MyRoutes"
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [blogs, setBlogs] = useState([])
  const setData = (data) => {
    const { id, title, desc, body } = data
    setBlogs([...blogs, data])
  }

  return (
    <div className="App">
      <NavBar />
      <MyRoutes />
    </div>
  );
}

export default App;
