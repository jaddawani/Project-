
// import './App.css';
import './App.css';
// import CalenderDateTime from './Components/Calender/CalenderDateTime';

import GoogleCalender from './Components/Calender/GoogleCalender';
// import Button from 'react-bootstrap/Button';
import {Button, Navbar , Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router } from '@reach/router';
import MainPage from './Views/MainPage';
import Parties from './Views/Parties';
import Pricing from './Views/Pricing';
import AddOnes from './Views/AddOnes';
import Food from './Views/Food';


function App(props) {
  return (
    <div className="App" >
 {/* <Header></Header>
 <TabPanel></TabPanel> */}
 
     {/* <CalenderDateTime></CalenderDateTime> */}
     {/* <GoogleCalender></GoogleCalender> */}

     <Router>

      <MainPage path="/"></MainPage>
      <Parties path="/parties"></Parties>
      <Pricing path="/pricing"></Pricing>
      <AddOnes path="/addones"></AddOnes>
      <Food path="/food"></Food>
     </Router>

       </div>
  );
}


export default App