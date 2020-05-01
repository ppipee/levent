import EventInfoAction from '../../eventinfo'
import { ILocation } from 'common/propTypes/info'

const setLocation = (old_location: ILocation, value: string, key: string) => {
	let location = { ...old_location }
	location = { ...location, [key]: value } as ILocation
	return {
		type: EventInfoAction.location,
		location,
	}
}
export default setLocation
