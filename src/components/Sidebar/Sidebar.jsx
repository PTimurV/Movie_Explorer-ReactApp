import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css' // Подключаем стили для сайдбара

const Sidebar = () => {
	const films = useSelector(state => state.films)

	// Фильтруем фильмы из избранного
	const favoriteFilms = films.filter(film => film.selected)

	// Фильтруем фильмы "посмотреть позже"
	const laterFilms = films.filter(film => film.later)

	return (
		<div className={`sidebar visible`}>
			<div className='sidebar-content'>
				<h3>Избранное</h3>
				<ul>
					{favoriteFilms.map(film => (
						<li key={film.id}>{film.title}</li>
					))}
				</ul>
				<h3>Посмотреть позже</h3>
				<ul>
					{laterFilms.map(film => (
						<li key={film.id}>{film.title}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
