import React from 'react'

const CategoryCheckbox = ({ category, checked, onChange }) => {
	return (
		<label>
			<input
				type='checkbox'
				value={category}
				checked={checked}
				onChange={onChange}
			/>
			{category}
		</label>
	)
}

export default CategoryCheckbox
