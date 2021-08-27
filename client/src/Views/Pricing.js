import React from "react";
import TabPanel from "../Components/TabPanel";
import Header from "../Components/Header"
import "../Components/Styles/TabPanelStyle.css";
const Pricing = () => {
  return (
    <div>
      <Header></Header>
      <br></br>
      <div className="tabPanel">
      <TabPanel value={1} index={1}>
        
        </TabPanel>
        </div>
    </div>
  );
};

export default Pricing;
