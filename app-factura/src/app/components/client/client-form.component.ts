import { Component, OnInit } from '@angular/core';
import { Client }            from '../../models/client';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-client-form',
  templateUrl: '../../views/client/client-form.component.html'
})
export class ClientFormComponent implements OnInit {

  public titulo: String = "Crear Cliente";
  //public client: Client = new Client();
  public client: Client;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService
              ){ }

  ngOnInit(): void {
    this.cargarCliente(); 
  }
  
  public cargarCliente(): void{
    this.route.params.subscribe(params=> {
       let id=params['id']
       if(id){
         console.log("Cargo client con el id:"+id);
       }else{
         console.log("Cargo cliente new void"); 
       }
    });
  }

  public create(){
    console.log("Creo un nuevo cliente");
    this.clientService.create();
  }

  public update(){
    console.log("Actualizo cliente");
    this.clientService.update();
  }

  public delete(){
    console.log("Delete cliente");
    this.clientService.delete();
  }





}
