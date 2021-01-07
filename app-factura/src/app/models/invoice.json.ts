import { Product } from './product';
import { ItemInvoice } from './item-invoice';
import { Invoice } from './invoice';
import { Client } from './client';

export const INVOICE: Invoice[] = [  
  { id: 1, descripcion: 'Venta punto de venta', observacion: ''
    ,items: [{ id: 1, producto: new Product(1,'Panasonic Pantalla LCD',259990), cantidad: 1,importe: 259990},
             { id: 2, producto: new Product(2,'Sony Camara digital DSC-W320B',123490), cantidad: 1,importe: 259990}]
    ,cliente: new Client(1,'Andrés','Guzmán','2017-12-11','profesor@bolsadeideas.com')
    ,total: 0, createAt: '01/09/2020'}
];


