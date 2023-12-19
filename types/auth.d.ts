type UserType = 'D.OPERACIONES' | 'J.SEGURIDAD' | 'J.SERVICIO';

interface User {
  dni: string;
  password: string;
  type: UserType;
}
