import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresasViewComponent } from './empresas-view/empresas-view.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';

const routes: Routes = [
    {
        path: '',
        component: EmpresasListComponent,
    },
    {
        path: 'create',
        component: EmpresaCreateComponent,
    },
    {
        path: 'view/:id',
        component: EmpresasViewComponent,
    },
    {
        path: 'edit/:id',
        component: EmpresasEditComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresasRoutingModule { }
