import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';

export class EmpresaDTO {
  id: number;
  cnpj: string;
  fantasyName: string;
  corporateName: string;
  mission: string;
  vision: string;
  funcionarios: UsuarioDTO[];



  constructor(
    id: number,
    cnpj: string,
    fantasyName: string,
    corporateName: string,
    mission: string,
    vision: string,
    funcionarios: UsuarioDTO[]) {
      this.id = id;
      this.cnpj = cnpj;
      this.fantasyName = fantasyName;
      this.corporateName = corporateName;
      this.mission = mission;
      this.vision = vision;
      this.funcionarios = funcionarios;
  }
}
