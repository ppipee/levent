import React from 'react'
import AddIcon from 'asset/icon/add'
import { CardWrapper, CreateCardWrapper } from './style'

const CreateCard = ({ handleOpen }: { handleOpen: () => void }) => (
	<CardWrapper onClick={handleOpen}>
		<CreateCardWrapper>
			<AddIcon />
		</CreateCardWrapper>
	</CardWrapper>
)

export default CreateCard
