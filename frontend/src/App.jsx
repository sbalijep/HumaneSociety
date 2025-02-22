/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import logo from './imgs/logo.svg';
import Signup from "signup.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// import React from 'react';
// import logo from './imgs/logo.svg';
// import './css/App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit
//           {' '}
//           <code>src/App.jsx</code>
//           {' '}
//           and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
