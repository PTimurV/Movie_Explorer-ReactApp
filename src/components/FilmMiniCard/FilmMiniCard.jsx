import React from 'react'
import './FilmMiniCard.css'
import selectedImg from '../../assets/selected.png'
import noSelectedImg from '../../assets/noSelected.png'
import { useDispatch } from 'react-redux'
import { changeSelect, changeLater } from '../../storeToolkit/filmsSlice'
import { Link } from 'react-router-dom'
import laterImg from '../../assets/later.png'
import noLaterImg from '../../assets/noLater.png'

const FilmMiniCard = ({ film }) => {
	const dispatch = useDispatch()
	const {
		id,
		title,
		description,
		actors,
		categories,
		rating,
		selected,
		later,
	} = film

	const handleChangeSelect = () => {
		dispatch(changeSelect(id))
	}
	const handleChangeLater = () => {
		dispatch(changeLater(id))
	}

	return (
		<div className='film-item'>
			<div className='upper'>
				<Link className='Link' key={film.id} to={`/films/${film.id}`}>
					<h3 className='film-title'>{title}</h3>
				</Link>

				<div className='icons'>
					<div className='film-favorite' onClick={handleChangeSelect}>
						{selected ? (
							<img src={selectedImg} alt='Yellow Star' />
						) : (
							<img src={noSelectedImg} alt='Black Star' />
						)}
					</div>

					<div className='film-favorite' onClick={handleChangeLater}>
						{later ? (
							<img src={laterImg} alt='Yellow watch' />
						) : (
							<img src={noLaterImg} alt='Black watch' />
						)}
					</div>
				</div>
			</div>
			<p className='film-description'>Описание: {description}</p>
			<p className='film-actors'>Актеры: {actors.slice(0, 2).join(', ')}</p>
			<p className='film-categories'>Категории: {categories.join(', ')}</p>
			<p className='film-rating'>Рейтинг: {rating}</p>
		</div>
	)
}

export default FilmMiniCard
