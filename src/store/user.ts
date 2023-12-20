import { useStorage } from '@vueuse/core';

export enum UserType {
  OPERACIONES = 'D.OPERACIONES',
  SEGURIDAD = 'J.SEGURIDAD',
  SERVICIO = 'J.SERVICIO'
}

interface UserStoreState {
  currentUserIndex?: number;
  rememberMe: boolean;
}

class UserStore {
  /**
   * == STATE ==
   */
  private _state = useStorage<UserStoreState>(
    'auth',
    {
      currentUserIndex: undefined,
      rememberMe: true
    },
    localStorage
  );
  private _users: User[] = [
    { dni: '00000000A', password: 'operaciones', type: UserType.OPERACIONES },
    { dni: '11111111B', password: 'seguridad', type: UserType.SEGURIDAD },
    { dni: '22222222C', password: 'servicio', type: UserType.SERVICIO }
  ];
  /**
   * Getters
   */
  public get currentUser(): User | undefined {
    return this._state.value.currentUserIndex === undefined ? undefined : this._users[this._state.value.currentUserIndex];
  }

  /**
   * Methods
   */
  /**
   * Logs the user to the application
   *
   * @param dni
   * @param password
   * @param rememberMe
   */
  public loginUser = (
    dni: string,
    password: string,
    rememberMe = true
  ): boolean => {
    const user = this._users.findIndex((u) => u.dni === dni.trim() && u.password === password.trim());

    if (user === -1) {
      return false;
    } else {
      this._state.value.currentUserIndex = user;
      this._state.value.rememberMe = rememberMe;

      return true;
    }
  };

  /**
   * Logs out the user
   */
  public logoutUser = (): void => {
    this._state.value.currentUserIndex = undefined;
    this._state.value.rememberMe = true;
  };

  public signUpUser = (user: User): void => {
    user.dni = user.dni.trim();
    user.password = user.password.trim();
    this._users.push(user);
  };

  public constructor() {
    if (!this._state.value.rememberMe) {
      this._state.value.currentUserIndex = undefined;
    }
  }
}

export const userStore = new UserStore();
