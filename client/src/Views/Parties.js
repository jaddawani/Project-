import React from "react";
import Header from "../Components/Header";
import TabPanel from "../Components/TabPanel";
import "../Components/Styles/TabPanelStyle.css";
import SimpleTabs from "../Components/TabPanel";
import Parallax from "../Components/Parallax/Parallax";
import { Grid, Paper, Button } from "@material-ui/core";
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
  imgSlider: {
    padding: "2rem",
  },
  title: {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  // BgC :[
  //   background-Image : "linear-gradient()"
  // ]
}));

const imgg =
  "https://www.color-meanings.com/wp-content/uploads/bright-colored-birthday-balloons-blue-background-1024x682.webp";

const Parties = () => {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <br></br>

      <Parallax
        small
        filter
        image={require("../assets/img/profile-bg.jpg").default}
      >
          
         </Parallax>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={classes.grid}>
          <Paper className={classes.paper}>
            <div className="tabPanel">
              <TabPanel value={0} index={0}></TabPanel>
            </div>

            <iframe
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/O2aQhWwxuyY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Paper>
        </Grid>

        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Button variant="primary">Primary</Button>{" "}
          </Paper>
        </Grid> */}
      </Grid>

      {/* <br></br>
      <SimpleTabs></SimpleTabs> */}

      {/* <video width="1000" height="500" controls>
  <source src="https://youtu.be/O2aQhWwxuyY" type="video/mp3" />
    </video> */}
    </div>
  );
};

export default Parties;
