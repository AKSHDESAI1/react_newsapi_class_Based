// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;


// rcc 
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News1 from './components/News1';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // c = 'John';
  apikey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 10
  }
  setProgress = (hi) => {
    this.setState({
      progress: hi,
    })
  }
  render() {
    return (
      <div>
        <Router>
          {/* Hello my first class based component {this.c} */}
          <Navbar />
          <LoadingBar
            height={3}
            color='blue'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path='/' element={<News1 key="general" apikey={this.apikey} aksh={this.setProgress} pagesize={6} category='general' />} />
            <Route exact path='/business' element={<News1 key='business' apikey={this.apikey} aksh={this.setProgress} pagesize={6} category='business' />} />
            <Route exact path='/entertainment' element={<News1 key="entertainment" apikey={this.apikey} aksh={this.setProgress} pagesize={6} category='entertainment' />} />
            <Route exact path='/health' element={<News1 key="health" apikey={this.apikey} aksh={this.setProgress} pagesize={6} category='health' />} />
            <Route exact path='/science' element={<News1 key="science" apikey={this.apikey} aksh={this.setProgress} pagesize={6} category='science' />} />
            <Route exact path='/sports' element={<News1 key="sports" apikey={this.apikey} aksh={this.setProgress} pagesize={6} category='sports' />} />
            <Route exact path='/technology' element={<News1 key="technology" apikey={this.apikey} aksh={this.setProgress} pagesize={6} category='technology' />} />


          </Routes>
        </Router>
      </div>
    )
  }
}

