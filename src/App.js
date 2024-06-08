import'./App.css';

import 'animate.css';
import Navs from './comp/Nave';
import Footer from './comp/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './comp/home content/Home';
import { Route, Routes} from 'react-router-dom';
import Developers from './comp/home content/Developers/Developers';
import About from './comp/home content/about/About';
import { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Details from './comp/Details';
import Signin from './Auth/Signin';
import Regester from './Auth/Regester';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Sell from './comp/Sale/Sell';
import Err from './comp/Err';
import Dashboard from './comp/admin/Dashboard';
import ReSale from './comp/admin/reSale/ReSale';
import SaleData from './comp/admin/SaleData';
import MaverickDeals from './comp/deals/MaverickDeals';
import DataBase from './comp/admin/Find home Data/DataBase';
import DealDetails from './comp/deals/DealDetails';
function App() {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem('mtTheme') === null ? 'light' : localStorage.getItem('mtTheme'));
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? {
        background: {
          default: '#f0f2f5'
        },
      }
        :
        {
          background: {
            default: '#000000eb'
          },
        }
      ),
    },
  });
  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className='App'>
      {
        loading?
        <div style={{display:'flex' , justifyContent:'center',alignItems:'center',height:'100%'} }>
          <HashLoader
          color={'#0d4d8f'}
          loading={loading}
          size={150}
        />
        </div>
      :
      <>      
      <Navs />
        <Routes>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path='/dashboard' element={<SaleData />} />
                  <Route path='/dashboard/resale' element={<ReSale />} />
                  <Route path='/dashboard/database' element={<DataBase />} />
                </Route>
                <Route path='/' element={<Home />} />
                <Route path='/maverickdeals' element={<MaverickDeals />} />
                <Route path='/maverickdeals/:dealId' element={<DealDetails />} />
                <Route path='/*' element={<Err />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Regester />} />
                <Route path='/developers' element={<Developers />} />
                <Route path='/:id' element={<About />} />
                <Route path="product/:productId" element={<Details />} />
        </Routes>
      <Footer />
      </>
      }
      </Box>
    </ThemeProvider>
  );
}

export default App;
