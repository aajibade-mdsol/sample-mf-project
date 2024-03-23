// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import RemoteComponentsLoader from './RemoteComponentLoader';
// // import Grid from '@mui/material/Unstable_Grid2';
// // import FirstWidget from "firstWidget/FirstWidget";
// // import SecondWidget from "secondWidget/SecondWidget";
// // import Typography from '@mui/material/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function App() {

  
//   return (
//     // <Box >
//     //    <Typography sx={{ fontSize: 28,  mb: 1.5  }} color="text.primary" gutterBottom  textAlign='left'>
//     //     Host Application
//     //   </Typography>
//     //   <Grid container spacing={2}>
//     //     <Grid xs={6}>
//     //       <FirstWidget />
//     //     </Grid>
//     //     <Grid xs={6}>
//     //       <SecondWidget/>
//     //     </Grid>
//     //   </Grid>
//     // </Box>
//     <RemoteComponentsLoader/>
//   );
// }


import React, { useState, useEffect } from 'react';
import RemoteComponentsLoader from './RemoteComponentLoader';

const App = () => {
  
  const [remoteConfigs, setRemoteConfigs] = useState([]);


  useEffect(() => {
    // Replace with your actual API call
    fetch('https://aajibade-mdsol.github.io/remote_json/remote.json')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.remotes) {
          setRemoteConfigs(data.remotes);
        } else {
          throw new Error('Invalid response structure');
        }
      })
      .catch((error) => {
        console.error("Fetching remote configs failed:", error);
      });
  }, []);
  return (
    <div className="App">
      <RemoteComponentsLoader remoteConfigs={remoteConfigs} />
      {/* <RemoteComponentsLoader/> */}
    </div>
  );
};

export default App;