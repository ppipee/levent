import React from 'react'

interface PropTypes {
	size?: string
	color?: string
}

const AddIcon = ({ size = '40', color = '#f7f7f7' }: PropTypes) => {
	return (
		<svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M40 22.8571H22.8571V40H17.1429V22.8571H0V17.1429H17.1429V0H22.8571V17.1429H40V22.8571Z"
				fill={color}
			/>
		</svg>
	)
}
export default AddIcon
