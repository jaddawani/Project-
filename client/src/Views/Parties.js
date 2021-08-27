import React from "react";
import Header from "../Components/Header";
import TabPanel from "../Components/TabPanel";
import "../Components/Styles/TabPanelStyle.css";
import SimpleTabs from "../Components/TabPanel";

const Parties = () => {
  return (
    <div>
      <Header></Header>
      <br></br>
      <div className="tabPanel">
        <TabPanel value={0} index={0}>
        
        </TabPanel>
      </div>
      {/* <br></br>
      <SimpleTabs></SimpleTabs> */}

      <br></br>
      <h1>pppppppppaaaaaaaaaarrrrrtttttiiiieeeeesssssss</h1>
<br></br>
      {/* <video width="1000" height="500" controls>
  <source src="https://youtu.be/O2aQhWwxuyY" type="video/mp3" />
    </video> */}

      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/O2aQhWwxuyY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Parties;
