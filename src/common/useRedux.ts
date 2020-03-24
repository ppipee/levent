import { useContext } from 'react'
import { StoreContext } from 'stores'

const useRedux = (reducer?: string) => {
	const { state, dispatch } = useContext(StoreContext)
	if (reducer) return [state[reducer], dispatch[reducer]]
	return [state, dispatch]
}
export default useRedux
