import React from 'react'
import CreateIcon from 'asset/icon/add.svg'
import { CardWrapper, CreateCardWrapper } from './style'

const CreateCard = ({ handleOpen }: { handleOpen: () => void }) => (
	<CardWrapper onClick={handleOpen}>
		<CreateCardWrapper>
			<img src={CreateIcon} alt="add-icon" />
		</CreateCardWrapper>
	</CardWrapper>
)

export default CreateCard
