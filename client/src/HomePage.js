// import './assets/HomePage.css'

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <button onClick={logout} className="btn btn-danger ml-lg-3">Sign Out</button>
    </div>
  )
}

export default Home;


// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

// function Home() {
//   const handleSignOut = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

// //   const handleNavigation = (path) => {
// //     window.location.href = path;
// //   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Box display="flex" alignItems="center" flexGrow={1}>
//             <img src="/path/to/logo.png" alt="Logo" width="40" height="40" />
//             <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//               NGO Donation
//             </Typography>
//           </Box>
//           <Button color="inherit">
//             Home
//           </Button>
//           <Button color="inherit">
//             About Us
//           </Button>
//           <Button color="inherit" >
//             Donate Now
//           </Button>
//           <Button color="inherit" onClick={handleSignOut}>
//             Sign Out
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <div>
//         <h1>Welcome to the Home Page</h1>
//         {/* Add your home page content here */}
//       </div>
//     </div>
//   );
// }

// export default Home;

