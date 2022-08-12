import './App.css';
import CountingCard from './Component/CountingCard';
import CourseCard from './Component/CourseCard';
import FirstSection from './Component/FirstSection';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Testimonial from './Component/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstSection/>
      <CountingCard/>
      <CourseCard/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
