import React from "react";
import { Person, Person2 } from "./components/Person";
import {About, About2} from "./components/About";
import {Interest, Interest2} from "./components/Interest";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">

      <div className="card">
        <Person />
        <About />
        <Interest />
        <Footer />
      </div>

      <div className="card">
        <Person2 />
        <About2 />
        <Interest2 />
        <Footer />
      </div>

    </div>
    
  )
}