import React from "react";
// import  {HashRouter} from "react-router-dom";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home";
import PageNavbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contect from "./components/Contect";
import MovieTic from "./components/MovieTic.JSX";
import About from "./components/About";
import Error from "./Error";


function App() {
    return ( <
        div className = "App" >
        <
        HashRouter >
        <
        PageNavbar / >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < Home / > }
        /> <
        Route exact path = 'Skills'
        element = { < Skills / > }
        /> <
        Route exact path = 'Project'
        element = { < Project / > }
        /> <
        Route exact path = 'Contect'
        element = { < Contect / > }
        /> <
        Route exact path = 'MovieTic'
        element = { < MovieTic / > }
        /> <
        Route exact path = 'About'
        element = { < About / > }
        /> <
        Route exact path = '*'
        element = { < Error / > }
        /> <
        /Routes> <
        /HashRouter> <
        /div>
    );
}

export default App;