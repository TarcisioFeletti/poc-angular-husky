import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClientListComponent } from './list/client-list.component'
import { ClientRegisterComponent } from './register/client-register.component'
import { ClientRoutingModule } from './client-routing.module'
import { MatTableModule } from '@angular/material/table'

@NgModule({
	declarations: [ClientListComponent, ClientRegisterComponent],
	imports: [CommonModule, ClientRoutingModule, MatTableModule],
})
export class ClientModule {}
