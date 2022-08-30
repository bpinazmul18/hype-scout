import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Campaign from './pages/Campaign'
import HypeSocial from './pages/HypeSocial'
import Insights from './pages/Insights'

import './App.scss'

const App: React.FC = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/campaign" element={<Campaign/>}/>
        <Route path="/hypesocial" element={<HypeSocial/>}/>
        <Route path="/insights" element={<Insights/>}/>

        <Route path="not-found" element={<p>NOT FOUND</p>}/>
        <Route path="*" element={<Navigate to="/not-found" replace/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App
