import React, { ReactNode } from 'react'
import { Modal, Backdrop, Fade } from '@material-ui/core'
import { CardPopup } from './style'

interface PropTypes {
	show: boolean
	children: ReactNode
	handleClose: () => void
}

const Popup = ({ show, children, handleClose }: PropTypes) => {
	return (
		<Modal
			open={show}
			onClose={handleClose}
			closeAfterTransition
			disableEnforceFocus
			disableAutoFocus
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={show}>
				<CardPopup>{children}</CardPopup>
			</Fade>
		</Modal>
	)
}
export default Popup
