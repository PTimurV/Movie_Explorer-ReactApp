import { configureStore } from '@reduxjs/toolkit'
import filmsSlice from './filmsSlice.js'
import commentsSlice from './commentsSlice.js'
const store = configureStore({
	reducer: {
		films: filmsSlice,
		comments: commentsSlice,
	},
})

export default store
