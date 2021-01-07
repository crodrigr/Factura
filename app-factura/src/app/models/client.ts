import { Invoice } from './invoice';

export class Client {
    id: number;
    nombre: string;
    apellido:string;
    createAt:string;
    email: string;
    //facturas: Array<Invoice> = []; 

    

    constructor(id: number, nombre: string, apellido: string, createAt: string, email: string) {
      this.id       = id;
      this.nombre   = nombre;
      this.apellido = apellido;
      this.createAt = createAt;
      this.email    = email;
    }

    

  }
  