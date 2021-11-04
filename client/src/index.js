import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'

import reportWebVitals from './reportWebVitals';


function Spa(){
  const [given_name, setGiven_name] = React.useState('');
  const [alldata, setAlldata] = React.useState('');

  function handle(){
    const url = `/givename/${given_name}`;

    (async () => {
      var res   = await fetch(url);
      var data  = await res.json();
      console.log(data)
    })();
  }

  React.useEffect(() => {
    //fetch all names from API
    fetch('/data')
      .then(response => response.json())
      .then(name_data => {
        console.log(name_data)
        setAlldata(JSON.stringify(name_data))
      })
  })


  return(
    <div className = "app">
      <h1>Hallo</h1>
      <input
      type ="input"
      placeholder = "enter name"
      value ={given_name}
      onChange ={e => setGiven_name(e.currentTarget.value)}></input>

      <button onClick={handle}>Submit Name</button>
      <div>{alldata}</div>
    </div>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
