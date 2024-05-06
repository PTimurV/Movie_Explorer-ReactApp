import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FilmMiniCard from '../FilmMiniCard/FilmMiniCard'
import CategoryCheckbox from './CategoryCheckbox' // Импортируем компонент CategoryCheckbox
import './SearchPage.css'
import Button from '../Button/Button' // Импортируем компонент Button
import { Link } from 'react-router-dom'

const SearchPage = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCategories, setSelectedCategories] = useState([])
	const films = useSelector(state => state.films)
	const categories = [
		'драма',
		'комедия',
		'фантастика',
		'криминал',
		'триллер',
		'детектив',
		'боевик',
	]

	// Функция для фильтрации фильмов по поисковому запросу и выбранным категориям
	const filteredFilms = films.filter(
		film =>
			film.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategories.length === 0 ||
				selectedCategories.every(category =>
					film.categories.includes(category)
				))
	)

	// Обработчик изменения состояния выбранных категорий
	const handleCategoryChange = e => {
		const { value, checked } = e.target
		if (checked) {
			setSelectedCategories(prevState => [...prevState, value])
		} else {
			setSelectedCategories(prevState =>
				prevState.filter(category => category !== value)
			)
		}
	}

	return (
		<div className='search-page'>
			<h1>Поиск фильмов</h1>
			<Link to='/' className='search-link'>
				<Button text='Популярные фильмы' />
			</Link>
			<h2>Поиск:</h2>
			<input
				className='inputSearch'
				type='text'
				placeholder='Введите название фильма'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<h2>Категории:</h2>
			<div className='category-checkboxes'>
				{categories.map(category => (
					<CategoryCheckbox
						key={category}
						category={category}
						checked={selectedCategories.includes(category)}
						onChange={handleCategoryChange}
					/>
				))}
			</div>
			<div className='search-results'>
				{filteredFilms.map(film => (
					<FilmMiniCard key={film.id} film={film} />
				))}
			</div>
		</div>
	)
}

export default SearchPage
