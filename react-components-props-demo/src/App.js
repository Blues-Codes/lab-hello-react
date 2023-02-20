// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Greeting from './components/Greeting.js';
import StudentCard from './components/Studentcard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Harper" />
      <Greeting firstName="Michelle" />
      <Greeting firstName="Andrea" />
 
      <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB' }} />
      <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: 'DATA' }} />
    </div>
  );
}
 
export default App;

