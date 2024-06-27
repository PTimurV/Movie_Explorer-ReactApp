import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../storeToolkit/commentsSlice'

const AddCommentForm = ({ filmId }) => {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addComment({ filmId, text }))
		setText('')
	}

	return (
		<div className='add-comment-form'>
			<h2>Добавить комментарий</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Текст комментария'
					value={text}
					onChange={e => setText(e.target.value)}
					required
				/>
				<button type='submit'>Отправить</button>
			</form>
		</div>
	)
}

export default AddCommentForm
