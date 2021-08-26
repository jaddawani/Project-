
// import './App.css';
// import CalenderDateTime from './Components/Calender/CalenderDateTime';
import Map from './Components/Map';
import GoogleCalender from './Components/Calender/GoogleCalender';
// import Button from 'react-bootstrap/Button';
import {Button, Navbar , Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import TabPanel from './Components/TabPanel';
import SectionCarousel from './Components/SectionCarousel';

function App(props) {
  return (
    <div >
  <Header></Header>
 <TabPanel></TabPanel>
     {/* <CalenderDateTime></CalenderDateTime> */}

{/* <SectionCarousel></SectionCarousel> */}
     {/* <Map></Map> */}

     {/* <GoogleCalender></GoogleCalender> */}

     <Button variant="primary">Primary</Button> 
       </div>
  );
}


export default App