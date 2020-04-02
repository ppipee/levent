import React from 'react'

const Facebook = ({ color = '#3B5998' }: { color?: string }) => {
	return (
		<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
				fill={color}
			/>
			<path
				d="M35.0392 29.0959H30.043V47.3999H22.4732V29.0959H18.873V22.6632H22.4732V18.5004C22.4732 15.5236 23.8873 10.8623 30.1104 10.8623L35.7176 10.8858V17.1298H31.6492C30.9818 17.1298 30.0435 17.4633 30.0435 18.8833V22.6691H35.7006L35.0392 29.0959Z"
				fill="white"
			/>
		</svg>
	)
}
export default Facebook
