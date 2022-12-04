import logo from "./assets/logo.svg";
import "./App.css";
import { TwitterLogo } from "phosphor-react";

// function randomColor() {
//   var color = '#';
//   var colorCode = ['540CF2','FA474A','F259C7','77E00DB']; // colors
//   var className = document.getElementsByClassName("change"); // class name to random color
//   var i;
//   color += colorCode[Math.floor(Math.random() * colorCode.length)];
// for (var i = 0; i < className.length; i ++) {
//     className[i].style.backgroundColor = color; }
// }

function App() {
  return (
  
      <body className="App" >
        <div className="content">
        <div className="App-content">
          <div className="App-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="container">
            <h1 className="Text">Working on it.</h1>
            <a href="https://twitter.com/quadrentech">
              <button className="button">
                <div className="button-text">
                  <TwitterLogo size={14} weight="fill" />
                  <span className="space" />
                  Follow along on Twitter      
                  </div>        
              </button>{" "}
            </a>
            </div>
            </div>
        </div>
        
      </body>
  
  );
}

export default App;
