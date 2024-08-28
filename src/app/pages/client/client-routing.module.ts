import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ClientListComponent } from "./list/client-list.component"
import { ClientRegisterComponent } from "./register/client-register.component"

const routes: Routes = [
	{
		path: "",
		component: ClientListComponent,
	},
	{
		path: "new",
		component: ClientRegisterComponent,
	},
	{
		path: "edit",
		component: ClientRegisterComponent,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientRoutingModule {}
