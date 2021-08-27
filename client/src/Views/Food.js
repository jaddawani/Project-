import React from 'react'
import Header from "../Components/Header"
import TabPanel from "../Components/TabPanel";
import "../Components/Styles/TabPanelStyle.css";

const Food = () => {
    return (
        <div>
      <Header></Header>
      <br></br>
      <div className="tabPanel">
      <TabPanel value={3} index={3}></TabPanel></div>

      <h1>foooooooooooooooooooooooood</h1>
        </div>
    )
}

export default Food
