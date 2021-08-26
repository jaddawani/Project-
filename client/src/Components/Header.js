import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import AnimatedBg from "react-animated-bg";
import Box from '@material-ui/core/Box';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router';
 import useStyles from './Styles';





const Navbar = (props) => {
    const classes = useStyles();
    const {LinkTo}=props


    
    
    return (

    <div>
    
    <div className ={classes.header}>
        <div className = {classes.logo}>
    <Avatar  className = {classes.img}  alt="logo" src="C:\Users\JAD\Desktop\Project\Project-\client\src\static\image\Screenshot 2021-08-19 105656.png" />
        <h1>Memorable</h1>
        </div>
        <div className = {classes.small}>
            Nahda Women Association 
            <br/>
            Non-profit organisation
        </div>
    </div>
        <div class = "nav">
        <Box boxShadow={10} >
        <Toolbar >
               
        </Toolbar>
        </Box>
        </div>
    </div>

);
    }



export default Navbar;