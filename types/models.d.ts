interface Client {
  id: string;
  nombreEmpresa: string;
  razonSocial: 'S.A' | 'S.L';
  domicilio: string;
  cif: string;
  telefono: number;
  cuentaBancaria?: string;
  metodoPago: 'Transferencia Bancaria' | 'Confirming' | 'Cuaderno 19';
  autenticacionBancaria?: boolean;
  nombreContacto: string;
  telefonoContacto: number;
  nombreAdministrador: string;
  telefonoAdministrador: number;
}

interface Place {
  id: string;
  clientId: string;
  nombre: string;
  direccion: string;
  edificio: 'Interior' | 'Exterior';
  camaras: number;
  plantas: number;
  garita: boolean;
}
