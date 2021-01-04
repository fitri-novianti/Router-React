// import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import UserGreeting from './components/UserGreeting'



// class App extends Component {
//   render (){
//     return (
//       <div className= "App">
//         {/*<UserGreeting />*/}
//         {/* <EventBind /> */} 
//         {/*<FunctionClick />*/}
//         {/*<ClassClick />*/}
//         <Counter />
//         {/*<Message />*/}
//         {/*<Greet name="Fitri" heroName="Wonder Woman">
//         <p>This is a children props</p>
//         </Greet>
//         <Greet name="Mutia" heroName="Black Widow">
//         <button>Action</button>
//         </Greet>*/}
//         {/*<Greet name="Anti" heroName="Captain America"/>*/}
//         {/*<Welcome name="FitriNovianti" heroName="Ant Man" />*/}
//         {/*<Hello />*/}
//       </div>  
//     )
//   }
// }
// export default App


import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './components/style.css';



class App extends Component {
  render() {
    return (
    <Router>
      
        <div>
          <h2>Hi! Selamat Datang di Router React</h2>
          <h3>by: Fitri Novianti</h3>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;