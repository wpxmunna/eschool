import './App.css';
import Footer from './Component/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';
import SingIn from './Component/SingUpIn/SingIn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <SingIn/>
    </div>
  );
}

export default App;
