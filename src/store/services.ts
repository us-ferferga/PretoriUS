import { useStorage } from '@vueuse/core';
import { v4 } from 'uuid';

class ServiceStore {
  /**
   * == STATE ==
   */
  private _state = useStorage<Service[]>(
    'services',
    [],
    localStorage
  );
  private _defaultServices: Service[] = [
    { id: 'f323f1d7-7415-4c3e-ba79-045c194b7220',
      lugarId: '035ccc75-3206-4da2-aaac-fc9c7253edca',
      inicio: new Date(2022, 7, 10, 8, 0),
      fin: new Date(2022, 7, 10, 16, 0),
      comentarios: 'Este es un comentario de ejemplo sobre el servicio del 10/08/2022'
    },
    { id: 'c5ab7bdc-00e6-43bf-80bb-ee18e3945e52',
      lugarId: '035ccc75-3206-4da2-aaac-fc9c7253edca',
      inicio: new Date(2023, 0, 2, 16, 0),
      fin: new Date(2023, 0, 2, 23, 0)
    },
    { id: '8bdd4497-aaca-4ba6-b89b-47f0d4483635',
      lugarId: '035ccc75-3206-4da2-aaac-fc9c7253edca',
      inicio: new Date(2023, 7, 25, 0, 0),
      fin: new Date(2023, 7, 25, 8, 0)
    }
  ];
  /**
   * Getters
   */
  public get services(): readonly Service[] {
    return [...this._defaultServices, ...this._state.value].map(s => ({ ...s, inicio: new Date(s.inicio), fin: new Date(s.fin) }));
  }

  /**
   * Methods
   */
  public addService = (service: Omit<Service, 'id'>): void => {
    (service as Service).id = v4();
    this._state.value.push(service as Service);
  };
}

export const serviceStore = new ServiceStore();
