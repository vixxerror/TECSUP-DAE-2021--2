import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Link, BrowserRouter,Routes} from 'react-router-dom'

import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound  from './notfound';

const routing = (
  
  <div>
      <BrowserRouter>
      <div class="container">
        
        <div class="row">
        <div class="col">
          <Link to="/">Home</Link>
        </div>
      <div class="col">
      <Link to="/usuarios">Users</Link>
      </div>
      <div class="col">
      <Link to="/contacto">Contact</Link>
      </div>
      </div>
     </div>
      
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/usuarios/:id" element={<Users />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/contacto/:id" element={<Contact />} />
          <Route path="*" element = {<Notfound />} />
        </Routes>
      </BrowserRouter>
  </div>  
  
)

  ReactDOM.render(
    routing, 
    document.getElementById('root')
  );
  


