import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';
import SingIn from './Component/SingUpIn/SingIn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='sing-in' element={<SingIn/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

export default App;
