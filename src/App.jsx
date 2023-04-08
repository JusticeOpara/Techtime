import React from "react"
import './App.css'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Index from "./pages"
import SignUp from "./pages"



function App() {

    return (
        <BrowserRouter>

            <div className="App">
                <Routes>

                    <Route path="/" element={<Index/>} />
                    <Route path="/sigin" element={<SignUp/>} />

                </Routes>

            </div>

        </BrowserRouter>





    )
}

export default App
