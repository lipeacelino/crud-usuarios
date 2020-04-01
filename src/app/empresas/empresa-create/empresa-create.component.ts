import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../service/empresa.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaDTO } from '../models/empresaDTO.entity';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {
  private formGroup: FormGroup;
  private submitted = false;

  constructor(
    private service: EmpresaService,
    private formBuilder: FormBuilder,
    private route: Router
    ) { }

  ngOnInit() {
    this.generateForm();

  }
  get form() {
    return this.formGroup.controls;
}

generateForm() {
    this.formGroup = this.formBuilder.group(
        {
            cnpj: ['', [Validators.required]],
            fantasyName: ['', [Validators.required]],
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
