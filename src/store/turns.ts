import { useStorage } from '@vueuse/core';
import { v4 } from 'uuid';

class TurnStore {
  /**
   * == STATE ==
   */
  private _state = useStorage<Turn[]>(
    'turns',
    [],
    localStorage
  );
  private _defaultTurns: Turn[] = [
    { id: '7c44560f-5df4-4d52-893b-cb17167daad4',
      nombreEmpresa: 'Empresa 1',
      razonSocial: 'S.A',
      domicilio: 'Calle 1',
      cif: 'A12345678',
      telefono: 123_456_789,
      cuentaBancaria: 'ES1234567891234567891234',
      metodoPago: 'Transferencia Bancaria',
      autenticacionBancaria: true,
      nombreContacto: 'Contacto 1',
      telefonoContacto: 234_567_890,
      nombreAdministrador: 'Administrador 1',
      telefonoAdministrador: 345_678_901
    },
    { id: '3f934116-7aff-4792-827e-0ac6883e7311',
      nombreEmpresa: 'Empresa 2',
      razonSocial: 'S.L',
      domicilio: 'Calle 2',
      cif: 'B12345678',
      telefono: 123_456_789,
      metodoPago: 'Cuaderno 19',
      nombreContacto: 'Contacto 1',
      telefonoContacto: 234_567_890,
      nombreAdministrador: 'Administrador 1',
      telefonoAdministrador: 345_678_901
    }
  ];
  /**
   * Getters
   */
  public get turns(): readonly Turn[] {
    return [...this._defaultTurns, ...this._state.value];
  }

  /**
   * Methods
   */
  public addClient = (turn: Omit<Turn, 'id'>): void => {
    (turn as Turn).id = v4();
    this._state.value.push(turn as Turn);
  };
}

export const turnStore = new TurnStore();
