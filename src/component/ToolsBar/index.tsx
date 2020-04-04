import React, { useState, MouseEvent } from 'react'
import TextIcon from 'asset/icon/tools/text.svg'
import { PositionWrapper, BarWrapper, ToolWrapper, ArrowUp, ArrowDown, ToolsContainer, ToolImg } from './style'
import ArrowIcon from 'asset/icon/arrow.svg'
const ToolsState: { [key: string]: boolean } = {
	mouse: false,
	text: true,
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
const Tools = [
	{
		icon: TextIcon,
		tip: 'Text',
		key: 'text',
	},
	{
		icon: TextIcon,
		tip: 'Text',
		key: 'button',
	},
	{
		icon: TextIcon,
		tip: 'Text',
		key: 'image',
	},
]

const ToolsBar = () => {
	const [tools_state, setTool] = useState(ToolsState)
	const handleChange = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLInputElement
		const key = target.getAttribute('data-key') as string
		setTool({ ...ToolsState, text: false, [key]: true }) //selected tool

		// do something
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
