import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		id: 1,
		filmId: '1',
		text: 'Прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 2,
		filmId: '2',
		text: 'Прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 3,
		filmId: '3',
		text: 'Не прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 4,
		filmId: '4',
		text: 'Не прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 5,
		filmId: '5',
		text: 'Прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 6,
		filmId: '6',
		text: 'Не прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 7,
		filmId: '7',
		text: 'Прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 8,
		filmId: '8',
		text: 'Не прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 9,
		filmId: '9',
		text: 'Прикольно',
		author: 'Анонимный пользователь',
	},
	{
		id: 10,
		filmId: '10',
		text: 'Не прикольно',
		author: 'Анонимный пользователь',
	},
]

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		addComment: (state, action) => {
			const { filmId, text, author = 'Анонимный пользователь' } = action.payload
			state.push({ id: state.length + 1, filmId, text, author })
		},
	},
})

export const { addComment } = commentsSlice.actions
export default commentsSlice.reducer
