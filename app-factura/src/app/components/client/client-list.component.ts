import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';



@Component({
  selector: 'app-client-list',
  templateUrl: '../../views/client/client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {   
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      (clients) => { this.clients=clients }
    );
  }

  delete(cliente: Client): void {		
    console.log("delete cliente :"+cliente.id);
    this.clientService.delete();
  }

}
