import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import './FilmDetailsPage.css'
import FilmMiniCard from '../FilmMiniCard/FilmMiniCard'
import CommentsList from '../CommentsList/CommentsList'
import AddCommentForm from '../AddCommentForm/AddCommentForm'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const FilmDetailsPage = () => {
	let { id } = useParams()
	const films = useSelector(state => state.films)

	const film = films.find(film => film.id == id)

	const [image, setImage] = useState('')
	;(function (imageName) {
		import(film.img).then(image => setImage(image.default))
	})(film)

	const findSimilarFilms = () => {
		const similarFilms = []
		films.forEach(otherFilm => {
			if (otherFilm.id !== film.id) {
				// Проверяем, есть ли совпадающие категории
				const commonCategories = otherFilm.categories.filter(category =>
					film.categories.includes(category)
				)
				if (
					commonCategories.length >= 2 ||
					(film.categories.length === 1 &&
						otherFilm.categories.includes(film.categories[0]))
				) {
					similarFilms.push(otherFilm)
				}
			}
		})
		return similarFilms
	}

	// Найти похожие фильмы
	const similarFilms = findSimilarFilms()

	return (
		<div>
			<img src={image} />
			<Link to='/' className='search-link'>
				<Button text='Популярные фильмы' />
			</Link>
			<Link to='/search' className='search-link'>
				<Button text='Поиск фильмов' />
			</Link>
			<div className='film-details'>
				<div className='film-details-labels'>
					<div>Название:</div>
					<div>Описание:</div>
					<div>Категории:</div>
					<div>Актеры:</div>
					<div>Год производства:</div>
					<div>Страна:</div>
					<div>Бюджет:</div>
					<div>Рейтинг:</div>
				</div>
				<div className='film-details-values'>
					<div>{film.title}</div>
					<div>{film.description}</div>
					<div>{film.categories.join(', ')}</div>
					<div>{film.actors.join(', ')}</div>
					<div>{film.year}</div>
					<div>{film.country}</div>
					<div>{film.price}</div>
					<div>{film.rating}</div>
				</div>
			</div>
			<h2>Похожие фильмы</h2>
			<div className='similar-films'>
				{similarFilms.map(similarFilm => (
					<FilmMiniCard key={similarFilm.id} film={similarFilm} />
				))}
			</div>
			<AddCommentForm filmId={id} />
			<CommentsList filmId={id} />
		</div>
	)
}

export default FilmDetailsPage
