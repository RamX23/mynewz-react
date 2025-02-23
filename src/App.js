import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import News from './components/News'
import Newsitem from './components/Newsitem'
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 export default class App extends Component{

  render() {
    return (
      <div>
            <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={12} country='in' category='business' />}></Route>
            <Route  exact path='/entertainment' element={<News key='entertainment' pageSize={12} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={12} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={12} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={12} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={12} country='in' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
