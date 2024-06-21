import React, { useState } from 'react';
import axios from 'axios';
import './body.css';
import citiesData from './cities.json';

function Body() {
  const [bloodgroup, setBloodgroup] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post('http://localhost:3001/blood', {
        bloodgroup,
        city,
      })
      .then((res) => {
        if (res.data.length > 0) { // Check if data is returned
          setData(res.data); // Store the data in state
          console.log(res.data);
       
        } else {
          alert('No results found');
          setData([]); // Clear data if no results
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Error fetching data');
      });
  }

  return (
    <>
      <div className='formbody'>
        <div className='inputfield-container'>
          <form className='form'>
            {/* <input
              className='inputfield'
              type='text'
              placeholder='Blood Group'
              value={bloodgroup}
              onChange={(e) => setBloodgroup(e.target.value)}
            /> */}
            <select className='Selector' value={bloodgroup} onChange={(e)=>setBloodgroup(e.target.value)}>
            <option value="">Select an option</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
            <option value="O+">O+</option>
          </select>
          <select className='Selector' value={city} onChange={(e)=>setCity=>setCity(e.target.value)}>
        <option value="">Select a city</option>
        {citiesData.map((cityName, index) => (
          <option key={index} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
            
            <button onClick={handleSubmit} type='submit'>
              Search
            </button>
            <div className='results'>
            <ul>
          {data.map((item, index) => (
            <li key={index}>
              Blood Group: {item.bloodgroup}, City: {item.city} Name:{item.name} Phone:{item.phone}
            </li>
          ))}
        </ul>
            </div>
          </form>
          
          
        </div>
        
        
      
        
      </div>
     
        <h2>Search Results:</h2>
       
        

      
      
    </>
  );
}

export default Body;
