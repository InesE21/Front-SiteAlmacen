export interface ProductoI {
    id?: number;
    nombre: string;
    marca: string;
    precio: number;
    stockmin: number;
    cantidad: number;
    tipoproducto: number | null;
  }