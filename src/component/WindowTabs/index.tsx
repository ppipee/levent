import React, { useState, MouseEvent } from 'react'
import { TabsContainer, Tab, ItemsContainer, AddTool, WindowContainer, ControlWrapper } from './style'
import { Line, Title } from 'component/DetailBoard/style'
import AddIcon from 'asset/icon/add'
import { ScheduleDetail, GalleryDetail, SocialDetail } from 'component/ToolsDetail'
import { SCHEDULE, GALLERY } from 'common/mockapi'

const TABS = ['Schedule', 'Gallery', 'Social', 'Sponser']
const WindowTabs = () => {
	const [tab, setTab] = useState(0)
	const handleChage = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLInputElement
		const index = target.getAttribute('data-index') as string
		setTab(+index)
	}
	return (
		<WindowContainer>
			<ControlWrapper>
				<TabsContainer>
					{TABS.map((data, index) => (
						<Tab data-index={index} onClick={handleChage} key={`tab-${data}`} active={index === tab}>
							{data}
						</Tab>
					))}
				</TabsContainer>
				<AddTool>
					<AddIcon size="14" />
					TOOL
				</AddTool>
			</ControlWrapper>
			<ItemsContainer>
				{/* {SCHEDULE.map((schedule, index) => (
					<ScheduleDetail key={`${schedule.title}-${index}`} getSchedule={schedule} />
				))} */}
				{/* {GALLERY.map((gallery, index) => (
					<GalleryDetail getGallery={gallery} key={`${gallery.title}-${index}`} />
				))} */}
				<SocialDetail />
			</ItemsContainer>
		</WindowContainer>
	)
}
export default WindowTabs
