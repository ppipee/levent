import React, { useState, ChangeEvent } from 'react'
import { Search } from 'component'
import { SelectWrapper, TemplatesContainer, TemplateCardWrapper, TemplateCard, TemplateTitle } from './style'

const SelectTemplate = () => {
	const [search, setSearch] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	return (
		<SelectWrapper>
			<Search value={search} onChange={handleChange} />
			<TemplatesContainer>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
				<TemplateCardWrapper>
					<TemplateCard />
					<TemplateTitle>Default</TemplateTitle>
				</TemplateCardWrapper>
			</TemplatesContainer>
		</SelectWrapper>
	)
}
export default SelectTemplate
