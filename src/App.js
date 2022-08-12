import './App.css';
import CountingCard from './Component/CountingCard';
import CourseCard from './Component/CourseCard';
import FirstSection from './Component/FirstSection';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstSection/>
      <CountingCard/>
      <CourseCard/>
    </div>
  );
}

export default App;
