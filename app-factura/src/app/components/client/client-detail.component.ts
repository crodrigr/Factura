import { Component, OnInit,Input } from '@angular/core';
import { Client }            from '../../models/client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: '../../views/client/client-detail.component.html'
})
export class ClientDetailComponent implements OnInit {

  public cliente: Client;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService
              ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(){
    this.route.params.subscribe(params=> {
      let id=params['id']
      if(id){
        console.log("Cargo client con el id:"+id);
        this.cliente=this.clientService.getClient(id);
      }else{
        console.log("Cargo cliente new void"); 
      }
   });

  }

}
