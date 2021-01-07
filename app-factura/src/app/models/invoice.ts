import { ItemInvoice } from './item-invoice';
import { Client } from './client';

export class Invoice {
  id: number;
  descripcion: string;
  observacion: string;
  items: Array<ItemInvoice> = [];
  cliente: Client;
  total: number;
  createAt: string;

 /* calcularGranTotal(): number {
    this.total = 0;
    this.items.forEach((item: ItemInvoice) => {
      this.total += item.calcularImporte();
    });
    return this.total;
  }*/
}