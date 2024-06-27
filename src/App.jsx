import './App.css'
import MainPage from './components/MainPage/MainPage'
import { Provider } from 'react-redux'
import store from './storeToolkit/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilmDetailsPage from './components/FilmDetailsPage/FilmDetailsPage'
import SearchPage from './components/SearchPage/SearchPage'
import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	return (
		<>
			<Provider store={store}>
				<Sidebar />
				<div style={{ marginRight: '300px' }}>
					<BrowserRouter>
						<Routes>
							<Route path='/' exact element={<MainPage />} />
							<Route path='/films/:id' element={<FilmDetailsPage />} />
							<Route path='/search' element={<SearchPage />} />
						</Routes>
					</BrowserRouter>
				</div>
			</Provider>
		</>
	)
}

export default App
