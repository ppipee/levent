import React from 'react'
import { WebToolsWrapper } from 'common/toolsStyle'
import { SocialWrapper } from './style'
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'asset/icon/tools'
import YoutubeIcon from 'asset/icon/tools/youtube'

interface PropTypes {
	social: {
		instagram?: string
		twitter?: string
		facebook?: string
		youtube?: string
	}
}

const SocialFollow = ({ social }: PropTypes) => {
	const { instagram, twitter, facebook, youtube } = social
	return (
		<WebToolsWrapper>
			<SocialWrapper>
				{facebook && (
					<a href={'https://' + facebook}>
						<FacebookIcon />
					</a>
				)}
				{twitter && (
					<a href={'https://' + twitter}>
						<TwitterIcon />
					</a>
				)}
				{instagram && (
					<a href={'https://' + instagram}>
						<InstagramIcon />
					</a>
				)}
				{youtube && (
					<a href={'https://' + youtube}>
						<YoutubeIcon />
					</a>
				)}
			</SocialWrapper>
		</WebToolsWrapper>
	)
}
export default SocialFollow
