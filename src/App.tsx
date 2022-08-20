import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/campaign" element={<h1>Campaign</h1>}/>
        <Route path="/hypesocial" element={<h1>Hypesocial</h1>}/>
        <Route path="/insights" element={<h1>Insights</h1>}/>

        <Route path="not-found" element={<p>NOT FOUND</p>}/>
        <Route path="*" element={<Navigate to="/not-found" replace/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
