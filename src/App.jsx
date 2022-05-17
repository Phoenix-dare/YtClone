import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Recommended from './components/Recommended.jsx';
import {
  BrowserRouter as Router,Route
} from "react-router-dom";


function App() {
	return (
		<div className="homepage">
      

      <Header />
      <div className="content">
							<Sidebar />
							<Recommended />
						</div>
          
					
      
		</div>
	);
}

export default App;
