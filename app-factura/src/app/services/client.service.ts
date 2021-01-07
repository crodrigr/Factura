import { Injectable } from '@angular/core';
import { Client }     from  '../models/client';
import { CLIENTS }    from  '../models/clients.json';
import { Observable, of } from  'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

   
  getClients(): Observable<Client[]>{
    return of(CLIENTS);
  }

  getClient(id: number): Client{
    console.log("clienteService getCliente con id:"+id);
    return new Client(1,'Andrés','Guzmán','2017-12-11','profesor@bolsadeideas.com')        
  }

  create(){
    console.log("clienteService create cliente");
  }
  
  update(){
    console.log("clienteService update cliente");
  }
  
  delete(){
    console.log("clienteService delete cliente");
  }

}
