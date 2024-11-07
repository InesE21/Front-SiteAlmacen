export interface VentaI {
    id?: number;
    fecha: string; // Almacena la fecha en formato ISO
    descuento: number;
    total: number;
    subtotal: number;
    usuario: number; // ID del usuario que realiza la venta
    cliente: number; // ID del cliente
    productos: {
        producto: number; // ID del producto
        cantidad: number; // Cantidad del producto
        precio: number; // Precio del producto
    }[];
}
