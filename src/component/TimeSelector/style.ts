import styled from 'styled-components'
import { CenterFlex } from 'common/style'

export const TimeWrapper = styled.div`
	width: 294px !important;
	display: flex;
	flex-wrap: wrap;
`
export const MaterialOverride = styled.div`
	margin-right: 8px;
	.MuiFormControl-marginNormal {
		margin: 0;
	}
	.MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl {
		min-width: 64px !important;
	}
`
