// import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
// import React from "react";



// export default function Footer() {



//     return (

//         <AppBar position="static" color="transparent">
//           <Container maxWidth="md">
//             <Toolbar>
//               <Typography variant="body1" color="inherit">
//                 © 2019 Gistia
//               </Typography>
//               <Typography variant="body1" color="inherit">
//                 Email : Dawanijad@gmail.com
//               </Typography>
//             </Toolbar>
//           </Container>
//         </AppBar>
//     )
// }

/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// import styles from "../assets/jss/material-kit-react/components/footerStyle.js";
import styles from "../assets/jss/material-kit-react/components/footerStyle"

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                
                <img src="data:image/jpeg;base64,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" width="60px"></img>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                <img src="https://s3images.zee5.com/wp-content/uploads/sites/7/2020/10/03-2020-10-06T125711.348-784x441.jpg" width="60"></img>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Email: dawanijad@gmail.com
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Phone: +972 598656681
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "} Memorabel  for  better Memories.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};



