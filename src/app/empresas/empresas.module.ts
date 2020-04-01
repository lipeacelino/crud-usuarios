import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasRoutingModule } from './empresa-routing.module';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { EmpresasViewComponent } from './empresas-view/empresas-view.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { EmpresaService } from './service/empresa.service';
import { EmpresaMockService } from './service/empresamock.service';



@NgModule({
  declarations: [
    EmpresaCreateComponent,
    EmpresasListComponent,
    EmpresasViewComponent,
    EmpresasEditComponent,
    EmpresasComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
        provide: EmpresaService,
        useClass: EmpresaMockService
    },
]
})
export class EmpresasModule { }
