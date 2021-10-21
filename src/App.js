import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import AddIceCream from "./AddIceCream";
import Header from "./components/Header";
// import IceCream from './components/IceCream';

function App() {
  return (
   
    <Router> 
      <Header />
      <div>
        <Switch>
          <Route path="/add">
            <AddIceCream />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  // return(
  //  <Home />
  // );
  // return (
  //   <section className="main">
  //     <IceCream /> 

    
  //   </section>
  // );

}

export default App;


