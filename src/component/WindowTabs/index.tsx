import React, { useState, MouseEvent, Dispatch, useCallback } from 'react'
import { TabsContainer, Tab, ItemsContainer, WindowContainer, ControlWrapper } from './style'
import { ScheduleDetail, GalleryDetail, SocialDetail } from 'component/ToolsDetail'
import { SCHEDULE, GALLERY } from 'common/mockapi'
import { Add } from 'component'
import { IWebToolState, IWebToolsAction } from 'reducer/WebToolsReducer'
import setSchedule from 'action/tools/setSchedule'
import { ISchedule } from 'common/propTypes/tools'

const TABS = ['Schedule', 'Gallery', 'Social', 'Sponser']

interface PropTypes {
	tools: IWebToolState
	setTools: Dispatch<IWebToolsAction>
}

const WindowTabs = ({ tools, setTools }: PropTypes) => {
	const [tab, setTab] = useState(0)

	const setStore = (data: any, index: number, type: string) => {
		if (type === 'schedule') {
			const schedule = setSchedule(data.title, data.schedule, index, tools.schedules as ISchedule[])
			setTools(schedule)
		}
	}

	const TOOLS = [
		{
			select: 'Schedule',
			component: () =>
				tools.schedules?.map((schedule, index) => (
					<ScheduleDetail
						key={`${schedule.title}-${index}`}
						getSchedule={schedule}
						setStore={setStore}
						index={index}
					/>
				)),
		},
		{
			select: 'Gallery',
			component: () =>
				GALLERY.map((gallery, index) => (
					<GalleryDetail getGallery={gallery} key={`${gallery.title}-${index}`} />
				)),
		},
		{
			select: 'Social',
			component: () => <SocialDetail />,
		},
		{
			select: 'Sponser',
			component: () => <div></div>,
		},
	]

	const handleChage = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLInputElement
		const index = target.getAttribute('data-index') as string
		setTab(+index)
	}
	return (
		<WindowContainer>
			<ControlWrapper>
				<TabsContainer>
					{TOOLS.map(({ select }, index) => (
						<Tab data-index={index} onClick={handleChage} key={`tab-${select}`} active={index === tab}>
							{select}
						</Tab>
					))}
				</TabsContainer>
				<Add />
			</ControlWrapper>
			<ItemsContainer>{TOOLS[tab].component()}</ItemsContainer>
		</WindowContainer>
	)
}
export default WindowTabs
