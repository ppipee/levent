import { useContext } from 'react'
import { StoreContext } from 'stores'

const useRedux = (reducer: string) => {
	const { state, dispatch } = useContext(StoreContext)[reducer]
	return [state, dispatch]
}
export default useRedux
