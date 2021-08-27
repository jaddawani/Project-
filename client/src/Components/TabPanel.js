import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { navigate } from '@reach/router';
import "../Components/Styles/TabPanelStyle.css"

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div  
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function SimpleTabs(props) {
  // const classes = useStyles();
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
        navigate("/parties");
        
    }
    if (newValue === 1) {
        navigate("/pricing");
    }
    if (newValue === 2) {
        navigate("/addones");
    }
    if (newValue === 3) {
      navigate("/food");
    }
  };

  return (
    <div className="TabP">
      <AppBar className="Appbar"  position="static">
        <Tabs  className="Tabs" value={value} onChange={handleChange} aria-label="">
          <Tab className="tab" label="Parties" {...a11yProps(0)} />
          <Tab className="tab" label="Pricing" {...a11yProps(1)} />
          <Tab className="tab" label="Add ones" {...a11yProps(2)} />
          <Tab className="tab" label="Food" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
   
     
     
    </div>
  );
}