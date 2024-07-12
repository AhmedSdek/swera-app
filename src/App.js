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
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Sell from './comp/Sell/Sell';
import Err from './comp/Err';
import Dashboard from './comp/admin/Dashboard';
import ReSale from './comp/admin/reSale/ReSale';
import SaleData from './comp/admin/SaleData';
import MaverickDeals from './comp/deals/MaverickDeals';
import DataBase from './comp/admin/Find home Data/DataBase';
import DealDetails from './comp/deals/DealDetails';
import DeveloperDetails from './comp/home content/Developers/DeveloperDetails';
import ProjectDe from './comp/home content/Developers/ProjectDe';
import NewLaunches from './comp/New Launches/NewLaunches';
import FindHomeDetails from './comp/Find a Home/FindHomeDetails';
import SellDetails from './comp/admin/SellDetails';
import FindDetails from './comp/Find a Home/FindDetails';
import NewLaunchesForm from './comp/admin/newLaunchesform/NewLaunchesForm';
import NewLaunchespage from './comp/New Launches/NewLaunchespage';
import FindCompDetails from './comp/Find a Home/FindCompDetails';
import NewLaunchDetails from './comp/New Launches/NewLaunchDetails';
import SahelMapPage from './comp/home content/sahel map/SahelMapPage';
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
  // useEffect(() =>{
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   },2000)
  // },[])
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack sx={{ minHeight: 'calc( 100vh + 265px)', justifyContent: 'space-between' }}>
      {
        loading?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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

                <Route path='dashboard' element={<Dashboard />}>
                  <Route index element={<SaleData />} />
                  <Route path='resale' element={<ReSale />} />
                  <Route path='database' element={<DataBase />} />
                  <Route path='details/:id' element={<SellDetails />} />
                  <Route path='newlaunchesform' element={<NewLaunchesForm />} />
                </Route>

                <Route path='findhome' element={<FindHomeDetails />} >
                  <Route path=':districtid' element={<FindDetails />} />
                  <Route path=':districtid/:findprojId' element={<FindCompDetails />} />
                </Route>
                <Route path='newlaunches' element={<NewLaunchespage />} />

                <Route path='newlaunches/:launchId' element={<NewLaunchDetails />} />

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/sahelmap' element={<SahelMapPage />} />
                <Route path='/maverickdeals' element={<MaverickDeals />} />
                <Route path='/maverickdeals/:dealId' element={<DealDetails />} />
                <Route path='/*' element={<Err />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Regester />} />
                {/* <Route path='/developers' element={<Developers />} /> */}
                <Route path='/developers/:devId' element={<DeveloperDetails />} />
                <Route path='/developers/:devId/:projId' element={<ProjectDe />} />
                <Route path="product/:productId" element={<Details />} />
        </Routes>
      <Footer />
      </>
      }
      </Stack>
    </ThemeProvider>
  );
}

export default App;
