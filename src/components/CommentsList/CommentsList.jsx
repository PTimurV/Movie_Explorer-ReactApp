import React from 'react'
import { useSelector } from 'react-redux'
import Comment from '../Comment/Comment'

const CommentsList = ({ filmId }) => {
	const comments = useSelector(state =>
		state.comments.filter(comment => comment.filmId == filmId)
	)

	return (
		<div className='comments-list'>
			<h2>Комментарии</h2>
			{comments.map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	)
}

export default CommentsList
