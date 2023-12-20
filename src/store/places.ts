import { useStorage } from '@vueuse/core';
import { v4 } from 'uuid';

class PlaceStore {
  /**
   * == STATE ==
   */
  private _state = useStorage<Place[]>(
    'places',
    [],
    localStorage
  );
  private _defaultPlaces: Place[] = [
    { id: '035ccc75-3206-4da2-aaac-fc9c7253edca',
      nombre: 'Lugar 1',
      empresaId: '7c44560f-5df4-4d52-893b-cb17167daad4',
      direccion: 'Calle 1',
      edificio: 'Interior',
      plantas: 2,
      camaras: 0,
      garita: false
    },
    { id: '3ce6f8b9-c691-4f97-b489-240ea317dfc6',
      nombre: 'Lugar 2',
      empresaId: '7c44560f-5df4-4d52-893b-cb17167daad4',
      direccion: 'Calle 2',
      edificio: 'Exterior',
      plantas: 1,
      camaras: 1,
      garita: true
    },
    { id: 'cac9c069-cdc8-4497-9991-06e7ad88a776',
      nombre: 'Lugar 3',
      empresaId: '7c44560f-5df4-4d52-893b-cb17167daad4',
      direccion: 'Calle 3',
      edificio: 'Exterior',
      plantas: 5,
      camaras: 7,
      garita: true
    }
  ];
  /**
   * Getters
   */
  public get places(): readonly Place[] {
    return [...this._defaultPlaces, ...this._state.value];
  }

  /**
   * Methods
   */
  /**
   * Añadir cliente
   */
  public addPlace(place: Omit<Place, 'id'>): void {
    (place as Place).id = v4();
    this._state.value.push(place as Place);
  }
}

export const placeStore = new PlaceStore();
