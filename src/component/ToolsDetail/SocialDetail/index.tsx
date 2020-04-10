import React, { useState, ChangeEvent } from 'react'
import { InputField } from 'component/PageManagement/style'
import { SocialWrapper, SocialTitle, SocialContent } from './style'
import { ISocial } from 'common/toolsType'

const getSocial: ISocial = {
	facebook: 'facebook.com',
	instagram: '',
	twitter: '',
	youtube: '',
}

const SocialDetail = () => {
	const [social, setSocial] = useState(getSocial)
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const key = e.target.getAttribute('data-key') as string
		setSocial({ ...social, [key]: value })
	}
	return (
		<SocialWrapper>
			{Object.keys(social).map(key => (
				<SocialContent>
					<SocialTitle>
						<div>{key}</div>
						<div>{':'}</div>
					</SocialTitle>
					<InputField value={social[key]} data-key={key} onChange={handleChange} />
				</SocialContent>
			))}
		</SocialWrapper>
	)
}
export default SocialDetail
