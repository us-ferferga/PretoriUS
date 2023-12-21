import { useStorage } from '@vueuse/core';

class VigilantStore {
  /**
   * == STATE ==
   */
  private _state = useStorage<Vigilant[]>(
    'vigilants',
    [],
    localStorage
  );
  private _defaultVigilants: Vigilant[] = [
    {
      nombre: 'Vigilante 1',
      dni: '42304073N',
      nss: 'F48012249',
      tir: 36_538_031,
      status: 'Activo'
    },
    {
      nombre: 'Vigilante 2',
      dni: '83022341T',
      nss: 'U16704314',
      tir: 36_538_031,
      status: 'Activo'
    },
    {
      nombre: 'Vigilante 3',
      dni: '44718079F',
      nss: 'B16108193',
      tir: 36_538_031,
      status: 'Activo'
    }
  ];
  /**
   * Getters
   */
  public get vigilants(): readonly Vigilant[] {
    return [...this._defaultVigilants, ...this._state.value];
  }

  /**
   * Methods
   */
  public addVigilant = (vigilant: Vigilant): void => {
    this._state.value.push(vigilant);
  };
}

export const vigilantStore = new VigilantStore();
