import React from 'react'
import MPHeader from '../Components/MPHeader';
import {Button} from 'react-bootstrap';
import Map from '../Components/Map';
import ImgSlider from '../Components/ImgSlider';




const MainPage = () => {
    return (
        <div>
          <MPHeader></MPHeader> 
        
        
          <ImgSlider></ImgSlider> 
          <br></br>
          <Map></Map>
          <Button variant="primary">Primary</Button> 
        </div>
    )
}

export default MainPage
