import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDTO } from '../models/empresaDTO.entity';

@Component({
  selector: 'app-empresas-edit',
  templateUrl: './empresas-edit.component.html',
  styleUrls: ['./empresas-edit.component.css']
})
export class EmpresasEditComponent implements OnInit {
  private formGroup: FormGroup;
  private submitted: boolean = false;
  private isLoading: boolean = true;
  private empresa: EmpresaDTO;

  constructor(
    private service: EmpresaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe((result) => {
        this.empresa = result;
        this.isLoading = false;
        this.generateForm();
    });
  }
  get form() {
    return this.formGroup.controls;
}

generateForm() {
    this.formGroup = this.formBuilder.group(
        {
            cnpj: [this.empresa.cnpj, [Validators.required]],
            fantasyName: [this.empresa.fantasyName, [Validators.required]],
            corporateName: [this.empresa.corporateName, [Validators.required]],
            mission: [this.empresa.mission, [Validators.required]],
            vision: [this.empresa.vision, [Validators.required]],
            funcionarios: [this.empresa.funcionarios, []],
        }
    );
}

onSubmit() {
    this.submitted = true;
    if (this.submitted && this.formGroup.invalid) {
        return;
    }

    const auxEmpresa = new EmpresaDTO(
      this.empresa.id,
      this.form['cnpj'].value,
      this.form['fantasyName'].value,
      this.form['corporateName'].value,
      this.form['mission'].value,
      this.form['vision'].value,
      this.form['funcionarios'].value
      )

    this.service.update(auxEmpresa).subscribe((result) => {
        this.router.navigate(['empresas', 'view', this.empresa.id]);
    });
}

}
