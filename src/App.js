
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from './components/Authentication/Signin';
import Landingpage from './components/Landingpage';
import Administrator from './components/Admin/Administrator';
import Changepassword from './components/Admin/Changepassword';
import Application from './components/Application';
import Test from './components/Test';
import { ThemeProvider } from './Themecontext.js';


function App() {
  return (
    
    <>
    <ThemeProvider>
      <Router>

    
    <Routes>
      <Route exact path="/" element={<Landingpage/>}/>
      <Route exact path="/Signin" element={<Signin/>}/>
      <Route exact path="/Administator" element={<Administrator/>}/>
      <Route exact path="/Changepassword" element={<Changepassword/>}/>
      <Route exact path="/Application" element={<Application/>}/>
      
      <Route exact path='/Test' element={<Test/>}/>




    </Routes>
     </Router>
    </ThemeProvider>
    
      
    
    </>
  );
}

export default App;
