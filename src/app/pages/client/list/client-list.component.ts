import { Component } from '@angular/core'
import {
	GenderKeyType,
	GenderWithLabels,
} from '../../../../shared/model/gender'
import { ClientInterface } from '../../../../shared/model/client'

const ELEMENT_DATA: ClientInterface[] = [
	{ id: 1, name: 'João', age: 50, gender: 'MASCULINO' },
	{ id: 2, name: 'Maria', age: 30, gender: 'FEMININO' },
	{ id: 3, name: 'Joana', age: 25, gender: 'FEMININO' },
	{ id: 4, name: 'Cesar', age: 60, gender: 'MASCULINO' },
	{ id: 5, name: 'Valdir', age: 55, gender: 'MASCULINO' },
	{ id: 6, name: 'Esther', age: 17, gender: 'FEMININO' },
	{ id: 7, name: 'Mary Jane', age: 18, gender: 'FEMININO' },
	{ id: 8, name: 'Pedro', age: 24, gender: 'MASCULINO' },
	{ id: 9, name: 'Francisco', age: 30, gender: 'MASCULINO' },
	{ id: 10, name: 'Moana', age: 33, gender: 'FEMININO' },
]

@Component({
	selector: 'app-client-list',
	templateUrl: './client-list.component.html',
	styleUrl: './client-list.component.scss',
})
export class ClientListComponent {
	GenderWithLabels = GenderWithLabels

	displayedColumns: string[] = ['id', 'name', 'age', 'gender']
	dataSource = ELEMENT_DATA

	getGender(gender: GenderKeyType) {
		return GenderWithLabels[gender].label
	}
}
