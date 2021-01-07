import { Product } from './product';
import { ItemInvoice } from './item-invoice';

export const ITEMINVOICE: ItemInvoice[] = [  
  { id: 1, producto: new Product(1,'Panasonic Pantalla LCD',259990), cantidad: 1,importe: 259990},
  { id: 2, producto: new Product(2,'Sony Camara digital DSC-W320B',123490), cantidad: 1,importe: 259990}
  
];
