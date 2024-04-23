import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Contract from './Contract';
import Point from './Point';
import InVoice from './InVoice'
import { useEffect } from 'react';
import MuiBar from './MuiBar';
import Login from './Login';
import Navbar from './Navbar';


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []); 

  return (
    <div>
    <Header />
    {/* <Navbar /> */}
    <Routes>
            <Route path='/login' element={<App />}></Route>
            <Route path='/contract' element={<Contract />}></Route>
            <Route path='/point' element={<Point />}></Route>
            <Route path='/invoice' element={<InVoice />}></Route>
    </Routes>
    {/* <MuiBar /> */}
    {/* <UiFormat /> */}
    <Footer />
    
    </div>
  );
}

export default App;
