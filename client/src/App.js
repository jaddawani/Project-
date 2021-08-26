import logo from './logo.svg';
// import './App.css';
// import CalenderDateTime from './Components/Calender/CalenderDateTime';
import Map from './Components/Map';
import GoogleCalender from './Components/Calender/GoogleCalender';
// import Button from 'react-bootstrap/Button';
import {Button, Navbar , Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import TabPanel from './Components/TabPanel';
import ImgSlider from './Components/ImgSlider';
import MPHeader from './Components/MPHeader';

function App() {
  return (
    <div >
<MPHeader></MPHeader>
      <br></br>
 <Header></Header>
 <TabPanel></TabPanel>
 
     {/* <CalenderDateTime></CalenderDateTime> */}

<ImgSlider></ImgSlider>
     <Map></Map>

     {/* <GoogleCalender></GoogleCalender> */}

     <Button variant="primary">Primary</Button> 
       </div>
  );
}

export default App;
