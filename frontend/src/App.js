import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mainpage from './component/mainpage/mainpage';
import ManagePage from './component/adminpage/adminpage';    
import Selectionpage from './component/selectionpage/selectionpage';
import Maintenancepage from './component/maintenancepage/maintenancepage';
import Managepagemaintenancepage from './component/adminpage_maintenance/adminpage_maintenance'
import Loginpage from './component/loginpage/loginpage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Loginpage />} />
        <Route path="/selectionpage" element={<Selectionpage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/manage" element={<ManagePage />} />
        <Route path="/maintenancepage" element={<Maintenancepage />} />
        <Route path="/manage_maintenancepage" element={<Managepagemaintenancepage />} />
      </Routes>
    </Router>
  );
} 

export default App;
