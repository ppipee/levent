import React, { ChangeEvent } from 'react'
import { SearchField, SearchWrapper } from './style'
import SearchIcon from 'asset/icon/search'

interface PropTypes {
	value: string | number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	default?: boolean
}

const Search = ({ value, onChange, default: main }: PropTypes) => {
	return (
		<SearchWrapper>
			<SearchField placeholder="search" onChange={onChange} value={value} />
			<SearchIcon default={main} />
		</SearchWrapper>
	)
}
export default Search
