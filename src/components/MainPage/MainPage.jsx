import React, { useState } from 'react'
import './MainPage.css'
import FilmMiniCard from '../FilmMiniCard/FilmMiniCard'
import { useSelector } from 'react-redux'
import Button from '../Button/Button' // Импортируем компонент Button
import { Link } from 'react-router-dom'

const MainPage = () => {
	const films = useSelector(state => state.films)
	const [sortByRatingAsc, setSortByRatingAsc] = useState(null) // Значение по умолчанию null
	const [filterByGenre, setFilterByGenre] = useState('') // Стейт для выбора жанра

	// Функция для изменения порядка сортировки
	const toggleSortOrder = () => {
		setSortByRatingAsc(prevState => (prevState === null ? true : !prevState))
	}

	// Функция для отключения сортировки
	const disableSorting = () => {
		setSortByRatingAsc(null)
	}

	// Функция для сортировки фильмов по рейтингу
	const sortFilmsByRating = (a, b) => {
		if (sortByRatingAsc) {
			return b.rating - a.rating
		} else {
			return a.rating - b.rating
		}
	}

	// Функция для фильтрации фильмов по жанру
	const filterFilmsByGenre = film => {
		if (!filterByGenre) {
			return true // Вернуть true, если фильтр не выбран
		}
		return film.categories.includes(filterByGenre)
	}

	// Отсортированные и отфильтрованные фильмы
	const sortedAndFilteredFilms =
		sortByRatingAsc !== null ? films.slice().sort(sortFilmsByRating) : films
	const filteredFilms = sortedAndFilteredFilms.filter(filterFilmsByGenre)

	return (
		<div className='main'>
			<h1>Популярные фильмы</h1>

			<Link to='/search' className='search-link'>
				<Button text='Поиск фильмов' />
			</Link>

			{/* Используем компонент Button для кнопок сортировки */}
			<div className='buttons'>
				<Button
					text={
						sortByRatingAsc
							? 'Сортировать по убыванию рейтинга'
							: 'Сортировать по возрастанию рейтинга'
					}
					onClick={toggleSortOrder}
				/>
				<Button text='Отключить сортировку' onClick={disableSorting} />

				<select
					className='select'
					value={filterByGenre}
					onChange={e => setFilterByGenre(e.target.value)}
				>
					<option value=''>Все жанры</option>
					<option value='драма'>Драма</option>
					<option value='комедия'>Комедия</option>
					<option value='фантастика'>Фантастика</option>
					<option value='криминал'>Криминал</option>
					<option value='триллер'>Триллер</option>
					<option value='детектив'>Детектив</option>
					<option value='боевик'>Боевик</option>
				</select>
			</div>

			{/* Добавляем выпадающий список для выбора жанра */}

			<div className='films'>
				{/* Рендер отфильтрованных фильмов */}
				{filteredFilms.map(film => (
					<FilmMiniCard key={film.id} film={film} />
				))}
			</div>
		</div>
	)
}

export default MainPage
