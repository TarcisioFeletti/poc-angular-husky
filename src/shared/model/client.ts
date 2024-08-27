import { GenderKeyType } from './gender'

export interface ClientInterface {
	id: number
	name: string
	age: number
	gender: GenderKeyType
}
