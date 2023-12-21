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
    { id: 'da532689-e4cb-4838-a737-e4b112f9341a',
      serviceId: 'f323f1d7-7415-4c3e-ba79-045c194b7220',
      inicio: new Date(2023, 7, 25, 8, 0),
      fin: new Date(2023, 7, 25, 14, 0),
      vehiculos: [],
      vigilantes: [],
      armas: [],
      checkpoints: []
    },
    { id: '49b15920-6711-40a9-89e5-38bd9064c50c',
      serviceId: 'f323f1d7-7415-4c3e-ba79-045c194b7220',
      inicio: new Date(2023, 7, 25, 17, 0),
      fin: new Date(2023, 7, 25, 22, 0),
      vehiculos: [],
      vigilantes: [],
      armas: [],
      checkpoints: []
    },
    { id: 'b8413774-1c25-4db7-a023-989902f5aecd',
      serviceId: 'f323f1d7-7415-4c3e-ba79-045c194b7220',
      inicio: new Date(2023, 7, 26, 8, 0),
      fin: new Date(2023, 7, 26, 14, 0),
      vehiculos: [],
      vigilantes: [],
      armas: [],
      checkpoints: []
    },
    { id: 'ce3abfb2-92da-4947-9763-f26356f131a6',
      serviceId: 'f323f1d7-7415-4c3e-ba79-045c194b7220',
      inicio: new Date(2023, 10, 15, 8, 0),
      fin: new Date(2023, 10, 15, 22, 0),
      vehiculos: [],
      vigilantes: [],
      armas: [],
      checkpoints: []
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
  public addTurn = (turn: Omit<Turn, 'id' | 'vehiculos' | 'vigilantes' | 'armas' | 'checkpoints'>): void => {
    (turn as Turn).id = v4();
    (turn as Turn).vehiculos = [];
    (turn as Turn).vigilantes = [];
    (turn as Turn).armas = [];
    (turn as Turn).checkpoints = [];
    this._state.value.push(turn as Turn);
  };

  public addVigilant = (turn: Turn, dni: string): void => {
    const oldTurn = this._state.value.find(t => t.id === turn.id);

    if (!oldTurn) {
      return;
    }

    this._state.value.splice(this._state.value.indexOf(oldTurn), 1);
    oldTurn.vigilantes.push(dni);
    this._state.value.push(oldTurn);
  };

  public removeVigilant = (turn: Turn, dni: string): void => {
    const oldTurn = this._state.value.find(t => t.id === turn.id);

    if (!oldTurn) {
      return;
    }

    this._state.value.splice(this._state.value.indexOf(oldTurn), 1);
    oldTurn.vigilantes = oldTurn.vigilantes.filter(v => v !== dni);
    this._state.value.push(oldTurn);
  };
}

export const turnStore = new TurnStore();
