import React from 'react'

const InstagramIcon = ({ color }: { color?: string }) => {
	return (
		<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M28.4485 55.6075C13.8206 55.6075 2 43.6449 2 28.8411C2 14.0374 13.8945 2 28.5224 2C43.0765 2 54.971 14.0374 54.971 28.8411C54.971 43.6449 43.0765 55.6075 28.4485 55.6075Z"
				fill={color ? color : 'url(#paint0_linear)'}
			/>
			<path
				d="M28 15.9239C32.3046 15.9239 32.7919 15.9239 34.4162 16.0051C35.9594 16.0863 36.8528 16.33 37.4213 16.5736C38.1523 16.8985 38.7208 17.2234 39.2893 17.7919C39.8579 18.3604 40.1827 18.8477 40.5076 19.6599C40.7513 20.2284 40.9949 21.0406 41.0761 22.665C41.1574 24.3706 41.1574 24.8579 41.1574 29.0812C41.1574 33.3858 41.1574 33.8731 41.0761 35.4975C40.9949 37.0406 40.7513 37.934 40.5076 38.5025C40.1827 39.2335 39.8579 39.802 39.2893 40.3706C38.7208 40.9391 38.2335 41.264 37.4213 41.5888C36.8528 41.8325 36.0406 42.0761 34.4162 42.1574C32.7107 42.2386 32.2234 42.2386 28 42.2386C23.6954 42.2386 23.2081 42.2386 21.5838 42.1574C20.0406 42.0761 19.1472 41.8325 18.5787 41.5888C17.8477 41.264 17.2792 40.9391 16.7107 40.3706C16.1421 39.802 15.8173 39.3147 15.4924 38.5025C15.2487 37.934 15.0051 37.1218 14.9239 35.4975C14.8426 33.7919 14.8426 33.3046 14.8426 29.0812C14.8426 24.7766 14.8426 24.2893 14.9239 22.665C15.0051 21.1218 15.2487 20.2284 15.4924 19.6599C15.8173 18.9289 16.1421 18.3604 16.7107 17.7919C17.2792 17.2234 17.7665 16.8985 18.5787 16.5736C19.1472 16.33 19.9594 16.0863 21.5838 16.0051C23.2893 15.9239 23.7767 15.9239 28 15.9239ZM28 13C23.6954 13 23.1269 13 21.4213 13.0812C19.7157 13.1624 18.5787 13.4061 17.5228 13.8122C16.467 14.2183 15.5736 14.7868 14.6802 15.6802C13.7868 16.5736 13.2183 17.467 12.8122 18.5228C12.4061 19.5787 12.1624 20.7157 12.0812 22.4213C12 24.1269 12 24.6954 12 29C12 33.3046 12 33.8731 12.0812 35.5787C12.1624 37.2843 12.4061 38.4213 12.8122 39.4772C13.2183 40.533 13.7868 41.4264 14.6802 42.3198C15.5736 43.2132 16.467 43.7817 17.5228 44.1878C18.5787 44.5939 19.7157 44.8376 21.4213 44.9188C23.1269 45 23.6954 45 28 45C32.3046 45 32.8731 45 34.5787 44.9188C36.2843 44.8376 37.4213 44.5939 38.4772 44.1878C39.533 43.7817 40.4264 43.2132 41.3198 42.3198C42.2132 41.4264 42.7817 40.533 43.1878 39.4772C43.5939 38.4213 43.8376 37.2843 43.9188 35.5787C44 33.8731 44 33.3046 44 29C44 24.6954 44 24.1269 43.9188 22.4213C43.8376 20.7157 43.5939 19.5787 43.1878 18.5228C42.7817 17.467 42.2132 16.5736 41.3198 15.6802C40.4264 14.7868 39.533 14.2183 38.4772 13.8122C37.4213 13.4061 36.2843 13.1624 34.5787 13.0812C32.9543 13 32.3858 13 28 13Z"
				fill="white"
			/>
			<path
				d="M27.9989 20.7969C23.4507 20.7969 19.7959 24.4517 19.7959 28.9999C19.7959 33.5481 23.4507 37.203 27.9989 37.203C32.5472 37.203 36.202 33.5481 36.202 28.9999C36.202 24.4517 32.5472 20.7969 27.9989 20.7969ZM27.9989 34.2791C25.0751 34.2791 22.6385 31.9238 22.6385 28.9187C22.6385 25.9948 24.9939 23.5583 27.9989 23.5583C30.9228 23.5583 33.3594 25.9136 33.3594 28.9187C33.3594 31.9238 31.004 34.2791 27.9989 34.2791Z"
				fill="white"
			/>
			<path
				d="M38.4776 20.4727C38.4776 21.5285 37.5842 22.4219 36.5283 22.4219C35.4725 22.4219 34.5791 21.5285 34.5791 20.4727C34.5791 19.4168 35.4725 18.5234 36.5283 18.5234C37.5842 18.5234 38.4776 19.4168 38.4776 20.4727Z"
				fill="white"
			/>
			{!color && (
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="16.875"
						y1="56.25"
						x2="43.125"
						y2="-5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#F4EC55" />
						<stop offset="0.2412" stop-color="#E48242" />
						<stop offset="0.3463" stop-color="#D66863" />
						<stop offset="0.4422" stop-color="#CD4F74" />
						<stop offset="0.4888" stop-color="#C94379" />
						<stop offset="1" stop-color="#3F56A6" />
					</linearGradient>
				</defs>
			)}
		</svg>
	)
}
export default InstagramIcon