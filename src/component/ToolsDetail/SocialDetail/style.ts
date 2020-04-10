import styled from 'styled-components'
import { SpaceBetweenFlex } from 'common/style'

export const SocialWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 480px;
	padding: 0 8px;
`
export const SocialTitle = styled.div`
	width: 144px;
	text-transform: capitalize;
	${SpaceBetweenFlex()}
`
export const SocialContent = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
`
