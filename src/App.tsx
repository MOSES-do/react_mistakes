import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import Home from './components/Home'
import UseCallback from './components/UseCallback'
import UseMemo from './components/UseMemo'
import UseRef from './components/UseRef'
import UseReducers from './components/UseReducer'
import UseLayoutEffect from './components/UseLayoutEffect'
import UseImperativeHandle from './components/UseImperative'
import Jokes from './components/Jokes'
import Posts from './components/Posts'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/callback" element={<UseCallback />} />
				<Route path="/usememo" element={<UseMemo />} />
				<Route path="/useref" element={<UseRef />} />
				<Route path="/usereducer" element={<UseReducers />} />
				<Route path="/uselayouteffect" element={<UseLayoutEffect />} />
				<Route path="/useimperativehandle" element={<UseImperativeHandle />} />
				<Route path="/jokes" element={<Jokes />} />
				<Route path="/posts" element={<Posts />} />
			</Routes>
		</div>
	);
}

export default App
