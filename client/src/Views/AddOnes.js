import React from "react";
import TabPanel from "../Components/TabPanel";
import Header from "../Components/Header";
import "../Components/Styles/TabPanelStyle.css";

const AddOnes = () => {
  return (
    <div>
      <Header></Header>
      <br></br>
      <div className="tabPanel">
      <TabPanel value={2} index={2}> </TabPanel> </div>
      <h1>Addddd ones!!!!!!!</h1>
    </div>
  );
};

export default AddOnes;
