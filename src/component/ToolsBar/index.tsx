import React, { useState, MouseEvent } from 'react'
import { PositionWrapper, BarWrapper, ToolWrapper, ArrowUp, ArrowDown, ToolsContainer, ToolImg } from './style'
import ArrowIcon from 'asset/icon/arrow.svg'
import { ToolsType } from 'common/type'
import Tools from './tools'

const ToolsState: { [key: string]: boolean } = {
	cursor: true,
	text: false,
	button: false,
	image: false,
	video: false,
	schedule: false,
	gallery: false,
	map: false,
	route: false,
	registration: false,
	social: false,
	sponser: false,
	ticket: false,
}

interface PropTypes {
	selectTool: (tool: ToolsType) => void
}

const ToolsBar = ({ selectTool }: PropTypes) => {
	const [tools_state, setTool] = useState(ToolsState)
	const handleChange = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLInputElement
		const key = target.getAttribute('data-key') as ToolsType
		setTool({ ...ToolsState, cursor: false, [key]: true }) //selected tool
		selectTool(key)
	}

	return (
		<PositionWrapper>
			<BarWrapper>
				<ArrowUp>
					<ToolImg src={ArrowIcon} alt="arrow-up" />
				</ArrowUp>
				<ToolsContainer>
					{Tools.map(({ tip, key, icon }) => (
						<ToolWrapper
							active={tools_state[key]}
							key={`tools-bar-${key}`}
							data-key={key}
							onClick={handleChange}
						>
							<ToolImg src={icon} alt={`tools-bar-${key}`} />
						</ToolWrapper>
					))}
				</ToolsContainer>
				<ArrowDown>
					<ToolImg src={ArrowIcon} alt="arrow-down" />
				</ArrowDown>
			</BarWrapper>
		</PositionWrapper>
	)
}
export default ToolsBar
