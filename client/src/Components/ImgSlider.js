import {React, useState} from "react";
import {Card} from "react-bootstrap"
import {Button , Placeholder } from 'react-bootstrap'
import { borders } from '@material-ui/system';
// import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import { Link, navigate } from "@reach/router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";




import Carousel from "react-bootstrap/Carousel";






const ImgSlider = () => {


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

  card:{

    borderRadius:"5%",
   

  },

  btn:{

    color: "white",
    textDecoration: "none"
    
    

  },

  textStyle:{
    fontFamily: "cursive",
    color:"black"

  },


  

}));

const classes = useStyles();
  return (
    <>
    {/* <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="http://coastal.zimbali.co.za/wp-content/uploads/sites/3/2017/11/imgs_11.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIF.lkQoOltaPvNRwm1bSgqpwA?pid=ImgDet&rs=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://coastal.zimbali.co.za/wp-content/uploads/sites/3/2017/11/imgs_11.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div> */}

 <br>
 </br>
 

    
  {/* <Card className="text-center" border="primary">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
      </Card.Text>
      <Card.Text>
      <iframe
        width="500"
        height="500px"
        src="https://www.youtube.com/embed/O2aQhWwxuyY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </Card.Text>
    </Card.Body> */}
  {/* <Card style = {{marginLeft : "180px"}}> */}
      
  {/* </Card> */}
  {/* </Card> */}
  <br />
   

<h1>Start Planning! </h1>
<br>
</br>
<br></br>

<div className="d-flex justify-content-around">
   <Card  className={classes.card }  border="danger" style={{ width: '25rem'}} >
   <Card.Img  className={classes.card} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BXfSxLxXhfKQy0po0yyVq5QHAmqvi_QzMg&usqp=CAU" height ="252px"/>
    <Card.Body>
      <Card.Title>Food</Card.Title>
      <Card.Text className={classes.textStyle}>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="danger">
           <Link className={classes.btn} to="/food">Add-Food</Link>
            </Button>{' '}

    </Card.Body>
  </Card>
  

  <Card className={classes.card} border="danger" style={{ width: '25rem' }}>
    {/* <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRn49LgtL-HKZU0O8taliFvklFasEVNvTOA&usqp=CAU" height ="252px" /> */}
    <CardMedia className={classes.card}
          component="img"
          alt="Contemplative Reptile"
          height="252"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRn49LgtL-HKZU0O8taliFvklFasEVNvTOA&usqp=CAU"/>
    <Card.Body>
      <Card.Title>Packages</Card.Title>
      <Card.Text className={classes.textStyle}>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="danger">
           <Link className={classes.btn} to="/pricing">Packages</Link>
            </Button>{' '}
    </Card.Body>
  </Card>
  
  <Card className={classes.card} border="danger" style={{ width: '25rem' }}  >
    <Card.Img className={classes.card} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJTEkA0atfXA67lzc61aUiXo6MBha__tBiw&usqp=CAU" height ="252px"/>
    <Card.Body>
      <Card.Title>Add-ones</Card.Title>
      <Card.Text className={classes.textStyle}>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="danger">
           <Link className={classes.btn} to="/addones">Add-Ones</Link>
            </Button>{' '}
    </Card.Body>
  </Card>
  
  
</div>
<br>
</br>
<h1>Know More About Us!</h1>
<br></br>
      <Card className={classes.card} border="danger">
      <Card.Body>
        <Card.Title >Memorabel</Card.Title>
        <Card.Text className={classes.textStyle} >
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action Without you in my life, I don’t know where I would be today. You taught me all the important lessons: working hard, respecting others, never quitting, and having fun no matter what. I am who I am because of you. On your birthday, I want to thank you for all you have done. Happy birthday, Mum!
        </Card.Text>
        <Card.Text>
          <small className="text-muted">Thank Yooou!!</small>
        </Card.Text>
      </Card.Body>
    </Card>
</>
  );
};

export default ImgSlider;
