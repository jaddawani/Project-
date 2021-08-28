import React from "react";
import MPHeader from "../Components/MPHeader";
import { Button } from "react-bootstrap";
import Map from "../Components/Map";
import ImgSlider from "../Components/ImgSlider";
import Parallax from "../Components/Parallax/Parallax";
import { Grid, Paper } from "@material-ui/core";
const landigImg = require("../assets/img/landing-bg.jpg");
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
  imgSlider:{
    padding: "2rem",
  }
}));

const imgg = "https://th.bing.com/th/id/OIP.HQ5RK0uxImGp4vBS10Wv5QHaEL?pid=ImgDet&rs=1"
const MainPage = () => {
   
  const classes = useStyles();
  return (
    <div className= "Mainpage">
      <MPHeader></MPHeader>
      <Parallax filter image={"https://th.bing.com/th/id/OIP.HQ5RK0uxImGp4vBS10Wv5QHaEL?pid=ImgDet&rs=1"}></Parallax>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={classes.grid} >
          <Paper className={classes.paper}>
            <div className={classes.imgSlider}>
            <ImgSlider></ImgSlider></div>
            <Map></Map>
            
          </Paper>
        </Grid>
   
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Button variant="primary">Primary</Button>{" "}
          </Paper>
        </Grid> */}
      </Grid>
      <h1>dddddddddddddddddddddd</h1>
    </div>
  );
};

export default MainPage;
