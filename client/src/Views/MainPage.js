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
"https://www.color-meanings.com/wp-content/uploads/bright-colored-birthday-balloons-blue-background-1024x682.webp"

const MainPage = () => {
  const classes = useStyles();
  return (
    <div className="Mainpage">
    <MPHeader
          color="transparent"
         
          brand="memorable"
       
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        
          ></MPHeader>

      <Parallax
        
        image={
          imgg
        }
      >
      
        <Grid xs={12} sm={12} md={6}>
          <h1 className={classes.title}>Your Story Starts With Us.</h1>
          <h4>
            Every landing page needs a small description after the big bold
            title, that{"'"}s why we added this text here. Add here all the
            information that can make you or your product create the first
            impression.
          </h4>
          <br />
          <Button
            color="danger"
            size="lg"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-play" />
            Watch video
          </Button>
        </Grid>
      </Parallax>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={classes.grid}>
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
