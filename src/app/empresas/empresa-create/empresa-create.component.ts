import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../service/empresa.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';
import { UsuarioMockService } from 'src/app/usuarios/service/usuariomock.service';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
})
export class EmpresaCreateComponent implements OnInit {
  private formGroup: FormGroup;
  private submitted = false;
  usuarios: UsuarioDTO[] = [];


  constructor(
    private service: EmpresaService,
    private userService: UsuarioMockService,
    private formBuilder: FormBuilder,
    private route: Router
    ) { }

  ngOnInit() {
    this.generateForm();
    this.listUsuarios();
    console.log(this.usuarios);

  }
  listUsuarios() {
    this.userService.list().subscribe(
        res => {
            this.usuarios = res;
        }, err => {
            console.log(err);
        }
    );
}
  get form() {
    return this.formGroup.controls;
}

generateForm() {
    this.formGroup = this.formBuilder.group(
        {
            cnpj: ['', [Validators.required]],
            fantasyName: ['', [Validators.required]],
            corporateName: ['', [Validators.required]],
            mission: ['', [Validators.required]],
            vision: ['', [Validators.required]],
            funcionarios: ['', []],
        }
    );
}

onSubmit() {
this.submitted = true;
if (this.formGroup.invalid) {
    return;
}

const empresa: EmpresaDTO = new EmpresaDTO(
    null,
    this.formGroup.controls['cnpj'].value,
    this.formGroup.controls['fantasyName'].value,
    this.formGroup.controls['corporateName'].value,
    this.formGroup.controls['mission'].value,
    this.formGroup.controls['vision'].value,
    this.formGroup.controls['funcionarios'].value,

);

this.service.insert(empresa).subscribe(
    result => {
        this.route.navigate(['/empresas']);
    }, err => {

    }
);
}
onReset() {
    this.submitted = false;
    this.formGroup.reset();
}

}
