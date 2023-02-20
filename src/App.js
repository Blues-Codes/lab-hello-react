// import logo from './logo.svg';
import './App.css';

import icon1 from '../src/images/icon1.png'
import icon2 from "../src/images/icon2.png"
import icon3 from '../src/images/icon3.png'
import icon4 from "../src/images/icon4.png"
import logo from "../src/images/ironhack-logo-xs.png"
import menu from '../src/images/menu-top-xs.png'

function App() {
  return (
    <div>

      <div className='body'>

        <div className='nav'>
          <img />
          <img />
        </div>

        <div className='main'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, becomea super Ninja Developer</p>
        </div>

        <div className='button'>
          <button>Awesome!</button>
        </div>

      </div>

      <div className='images'>

        <div>
          <img src={icon1}/>

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div>
          <img src={icon2} />

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div>
          <img src={icon3}/>

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div>
          <img src={icon4} />

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
