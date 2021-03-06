import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Instructions from './components/instructions.js';
// import HomePage from './components/navBar.js';
import NavBar from './components/navBar.js';
import LoginForm from './components/loginForm.js';
import reportWebVitals from './reportWebVitals';

// Instruction
// 1.	Using create-react-app, create a new React project.
// 2.	Create a LoginForm component that should contain username and password input fields,
//    an h3 that says Log In, and a border. Style the component using the default
//    generated css file.
// 3.	Create a Navigation component that contains links styled like a navbar. The link
//    don’t have to go anywhere. 
// 4.	Put the Navigation component at the top of the page and the LoginForm in the center
//    of the page.

ReactDOM.render(
    <div>
      <Instructions />
      <NavBar />
      {/* <h3>Log In</h3>
      <div style={{border: '1px solid black', textAlign: 'center', alignContent: 'center', display: 'inline-block'}}> */}
      <LoginForm />
      {/* </div> */}
    </div>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
