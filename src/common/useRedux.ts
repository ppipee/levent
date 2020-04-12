import { useContext } from 'react'
import { StoreContext, StoreState, ActionState } from 'stores'

const useRedux = (reducer?: string) => {
	const { state, dispatch } = useContext(StoreContext)
	if (reducer) return [state[reducer], dispatch[reducer]]
	return [state, dispatch] as [StoreState, ActionState]
}
export default useRedux
