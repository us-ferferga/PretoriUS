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

interface Person {
  dni: string;
  nss: string;
  tir: number;
  status: 'Activo' | 'Inactivo';
}

interface Arm {
  id: string;
  modelo: string;
  tipo: 'Fijo' | 'Móvil';
}

interface Vehicle {
  matricula: string;
  marca: string;
  modelo: string;
  proxItv: Date;
}

interface Checkpoint {
  planned_date: Date;
  done_date: Date;
  coordinates: string;
}

interface Turn {
  id: string;
  serviceId: string;
  inicio: Date;
  fin: Date;
  status: 'Realizado' | 'Pendiente';
  vehiculos: Vehicle[];
  vigilantes: Person[];
  armas: Arm[];
  checkpoints: Checkpoint[];
}

interface Service {
  id: string;
  lugarId: string;
  inicio: Date;
  fin: Date;
  comentarios?: string;
}
