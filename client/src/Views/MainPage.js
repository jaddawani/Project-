import React from "react";
import MPHeader from "../Components/MPHeader";
import { Button } from "react-bootstrap";
import Map from "../Components/Map";
import ImgSlider from "../Components/ImgSlider";
import Parallax from "../Components/Parallax/Parallax";
import { Grid, Paper } from "@material-ui/core";
const landigImg = require("../assets/img/landing-bg.jpg");
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Components/Footer";

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
          <h1>Your Story Starts With Us.</h1>
          <h4>
            Forget the past; it is gone. Do not think of the future; it has not come. But live in the present with Memorabel because it's a gift and that's why it's called the present. Happy birthday!
          </h4>
          <br />
          
            <Button variant="danger" 
             
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
              <h1>Our Location!</h1>
              <Map></Map>
          </Paper>
        </Grid>

        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Button variant="primary">Primary</Button>{" "}
          </Paper>
        </Grid> */}
      </Grid>
      
        <Footer></Footer>
    </div>
  );
};

export default MainPage;
