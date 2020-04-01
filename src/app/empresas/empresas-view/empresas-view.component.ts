import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../service/empresa.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';

@Component({
  selector: 'app-empresas-view',
  templateUrl: './empresas-view.component.html',
  styleUrls: ['./empresas-view.component.css']
})
export class EmpresasViewComponent implements OnInit {
  private isLoading = true;
  private empresa: EmpresaDTO;

  constructor(private activatedRoute: ActivatedRoute, private service: EmpresaService) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe((result) => {
          this.empresa = result;
          this.isLoading = false;
        });
      }
  }
