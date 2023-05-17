import React, {useState} from 'react';
import './App.css';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import DisplayPostCodes from './PostcodeData/DisplayPostcodes';


function App() {
  const [enteredPostCode, setEnteredPostCode] = useState('');
  const[errorMessage,setErrorMessage]=useState('');
  
  const checkEnteredPostCode=()=>{
    if(enteredPostCode==='')
   {
    setErrorMessage('empty postcode !')
   }
  }

  return (
    <Router>
    <div className="App">
      <div className='container-fluid'> 
      <h1 className='text-center mb-4 mt-4 bg-red bg-light'>Lookup Postcodes</h1>
        <div className='form component'>
          <h4>Please enter a postcode *</h4>
          <form className="input-group mb-3"> 
            <input className="" type='text' placeholder='CB4 0GF' value={enteredPostCode} onChange={(e)=>setEnteredPostCode(e.target.value)} required="required"/>
             <div>
                <Link to={`/${enteredPostCode}`} className="btn btn-outline-secondary ml-1" onClick={checkEnteredPostCode}>Submit</Link>
            </div>
            <div className="error text-danger ml-5 p-1 mt-1">{errorMessage}</div>
          </form>
        </div>
         <div>
          <DisplayPostCodes errorMessage={setErrorMessage}/>
         </div>
      </div>
    </div>
    </Router>
  );
}

export default App;