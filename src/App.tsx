/*
 * @Author: wanghh
 * @Date: 2021-12-10 08:43:07
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 08:43:00
 * @Description: 
 */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";
import routes from './routers/config';
// import UserLayout from './layouts/UserLayout';
function App() {
  return (
    <Router>
      {/* <Link to="/home" ></Link> */}
      <Routes>{
        routes.map((route,index) => (
          <Route key={index} path={route.path} element={<route.main />} />
        ))
        } 
    </Routes>
  </Router>
  );
}

export default App;
