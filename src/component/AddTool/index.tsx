import React, { useState } from 'react'
import Popup from 'component/common/Popup'
import AddIcon from 'asset/icon/add'
import { Add } from './style'

const AddTool = () => {
	const [show, setShow] = useState(false)
	const closeAddTool = () => {
		setShow(false)
	}
	const openAddTool = () => {
		setShow(true)
	}
	return (
		<>
			<Add onClick={openAddTool}>
				<AddIcon size="14" />
				TOOL
			</Add>
			<Popup show={show} handleClose={closeAddTool}>
				AddTools
			</Popup>
		</>
	)
}
export default AddTool
