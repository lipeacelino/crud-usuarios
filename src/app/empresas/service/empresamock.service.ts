import { Injectable } from '@angular/core';
import { IEmpresaService } from './iempresa.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmpresaMockService implements IEmpresaService {

    empresas: EmpresaDTO[];

    lastId: number;

    list(): Observable<any> {
        return new Observable<any>(
            (obs) => {
                obs.next(this.empresas);
                obs.complete();
            }
        );
    }
    getById(id: number): Observable<any> {
        let auxEmpresa: EmpresaDTO;
        this.empresas.forEach((empresa) => {
            if (empresa.id === id) { auxEmpresa = empresa; }
        });
        return new Observable<EmpresaDTO>((obs) => {
            obs.next(auxEmpresa);
            obs.complete();
        });
    }
    update(empresa: EmpresaDTO): Observable<any> {
        let oldEmpresa = this.empresas
        .filter(empresa => empresa.id == empresa.id)
        .pop();

        Object.assign(oldEmpresa, empresa);

        return new Observable<any>((obs) => {
            obs.next(empresa);
            obs.complete();
        });
    }


    insert(empresa: any): Observable<any> {
        this.empresas.push(empresa);
        empresa.id = ++this.lastId;
        return new Observable<any> (
            (obs) => {
                obs.next(empresa);
                obs.complete();
            }
        );
    }
    delete(id: number): Observable<any> {
        const aux: EmpresaDTO[] = [];
        this.empresas.forEach((empresa) => {
            if (empresa.id !== id) {
                aux.push(empresa);
            }
        });
        this.empresas = aux;
        return new Observable<any>(
            (obs) => {
                obs.next(true);
                obs.complete();
            }
        );
    }

    constructor() {
        this.empresas = [new EmpresaDTO(1,
            'Sesi', 'xx.xxx.xxx/xxxx-xx', 'Sesi Academia', 'Sesi Parque da Mata', 'S.E.S.I - RT', null)];
        this.lastId = 0;
    }
}
