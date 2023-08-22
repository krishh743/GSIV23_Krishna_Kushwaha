import {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Sidemenu from './components/sidemenu/Sidemenu';
import {ThemeProvider} from 'styled-components';
import {Box, CssBaseline, createTheme} from '@mui/material';
import Home from './pages/home-page/Home';

function App() {
  const defaultTheme = createTheme();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Box sx={{display: 'flex'}}> */}
        {/* <CssBaseline /> */}
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
          <Home />
      {/* </Box> */}
    </ThemeProvider>
  );
}

export default App;

