import { Product } from './product';

export class ItemInvoice {
  id: number;
  producto: Product;
  cantidad: number = 1;
  importe: number;

  constructor(id: number, producto: Product, cantidad: number, importe: number) {
    this.id       = id;
    this.producto = producto;
    this.cantidad = cantidad;
    this.importe  = importe;
  }

  /*public calcularImporte(): number {
    return this.cantidad * this.producto.precio;
  }*/
}