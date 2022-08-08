import './App.css';
import CountingCard from './Component/CountingCard';
import FirstSection from './Component/FirstSection';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstSection/>
      <CountingCard/>
    </div>
  );
}

export default App;
