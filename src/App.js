import React from 'react'
import Navbar from './Components/Navbar'
// import News setProgress = {setProgress} from './Components/News setProgress = {setProgress}'
import News from './Components/News'
import './Components/Global.css';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

{/* businessentertainmentgeneralhealthsciencesportstechnology */ }
export default function App() {
  const [progress, setProgress] = useState(20)

  // let apiKey = process.env.NEWS_API
  let apiKey = "aa7ac54820bd4532b3ca47c02fca65a2";

  return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height = {3}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" category="general" />} />
          <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key="business" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key="health" category="health" />} />
          <Route exact path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key="science" category="science" />} />
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key="technolgoy" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}
