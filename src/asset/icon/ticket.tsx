import React from 'react'

const TicketIcon = ({ size }: { size?: string }) => {
	let height = '45'
	let width = '40'
	if (size === 'small') {
		height = '30'
		width = '27'
	}
	return (
		<svg width={height} height={width} viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0)">
				<path
					d="M0.893412 6.80957C0.889297 6.81149 0.880879 6.81691 0.868846 6.83063C0.842342 6.86084 0.8125 6.91973 0.8125 7.00353V11.7885C0.8125 11.8723 0.842342 11.9312 0.868846 11.9614C0.880883 11.9751 0.889301 11.9805 0.893415 11.9824C0.89357 11.9825 0.893718 11.9826 0.893861 11.9826M0.893412 6.80957L0.893861 11.9826M0.893412 6.80957H7.17559V23.1905H0.89341C0.889294 23.1886 0.880878 23.1832 0.868846 23.1695C0.842342 23.1392 0.8125 23.0804 0.8125 22.9966V18.2115C0.8125 18.1277 0.842342 18.0689 0.868846 18.0386C0.880882 18.0249 0.889302 18.0195 0.893416 18.0176C0.893571 18.0175 0.893719 18.0174 0.893861 18.0174M0.893861 11.9826C0.895517 11.9829 0.89631 11.9832 0.896292 11.9833C0.896274 11.9835 0.895446 11.9833 0.893861 11.9826Z"
					stroke="url(#paint0_linear)"
					stroke-width="1.5"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear"
					x1="13.2204"
					y1="6.05957"
					x2="13.2204"
					y2="23.9406"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#FA709A" />
					<stop offset="1" stop-color="#FEE140" />
				</linearGradient>
				<clipPath id="clip0">
					<rect x="0.0625" width="26.3156" height="30" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}
export default TicketIcon
