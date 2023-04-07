import React from "react"
import './App.css'
import Homepage from "./components/Homepage"
import About from "./components/About"
import Courses from "./components/Courses"
import Testimonal from "./components/Testimonal"
import Community from "./components/Community"
import Questions from "./components/Questions"
import Footer from "./components/Footer"
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'



function App() {

    return (


        <div className="App">

            <Homepage />

            <About />

            <Courses />

            <Testimonal />

            <Community />

            <Questions />

            <Footer />

        </div>




    )
}

export default App
