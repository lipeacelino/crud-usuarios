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
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmDialogComponent } from './empresas-list/confirm-dialog.component';
import { ConfirmDialogService } from './empresas-list/confirm-dialog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EmpresaCreateComponent,
    EmpresasListComponent,
    EmpresasViewComponent,
    EmpresasEditComponent,
    EmpresasComponent,
    ConfirmDialogComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ],
  providers: [ConfirmDialogService,
    {
        provide: EmpresaService,
        useClass: EmpresaMockService
    },
],
  entryComponents: [ ConfirmDialogComponent ]
})
export class EmpresasModule { }
