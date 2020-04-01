import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../service/empresa.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {
  loading = true;
  empresas: EmpresaDTO[] = [];

  constructor(private service: EmpresaService, private router: Router) { }

  ngOnInit() {
    this.list();
  }
  list() {
    this.loading = true;
    this.service.list().subscribe(
        res => {
            this.loading = false;
            this.empresas = res;
        }, err => {
            console.log(err);
        }
    );
}
  delete(id: number) {
    this.service.delete(id).subscribe(
        res => {
            this.list();
        }, err => {
            console.log(err);
        }
    );
    return false;
  }

  view(id: number) {
    this.router.navigate(['empresas', 'view', id]);
  }

  edit(id: number) {
    this.router.navigate(['empresas', 'edit', id]);
  }
}
