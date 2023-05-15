import React, {useState} from 'react';
import './App.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [postcodeValue, setpostcodeValue] = useState('');

  console.log(postcodeValue)
  return (
    <Router>
    <div className="App">
      <div className='container'>
        <div className='form'>
          <h3>Enter Postcode</h3>
          <form className="input-group mb-3"> 
            <input className="" type='text' placeholder='CB4 0GF' value={postcodeValue} onChange={(e) => setpostcodeValue(e.target.value)} required="required"/>
             <div>
                <Link to={`/${postcodeValue}`} className="btn btn-outline-secondary">Submit</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;