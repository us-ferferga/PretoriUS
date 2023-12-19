import { useStorage } from '@vueuse/core';

interface UserStoreState {
  users: User[];
  currentUserIndex?: number;
  rememberMe: boolean;
}

const initialUsers: User[] = [
  { dni: '00000000A', password: 'operaciones', type: 'D.OPERACIONES' },
  { dni: '11111111B', password: 'seguridad', type: 'J.SEGURIDAD' },
  { dni: '22222222C', password: 'servicio', type: 'J.SERVICIO' }
];

class UserStore {
  /**
   * == STATE ==
   */
  private _state = useStorage<UserStoreState>(
    'auth',
    {
      users: initialUsers,
      currentUserIndex: undefined,
      rememberMe: true
    },
    localStorage
  );
  /**
   * Getters
   */
  public get currentUser(): User | undefined {
    return this._state.value.currentUserIndex === undefined ? undefined : this._state.value.users[this._state.value.currentUserIndex];
  }

  private get _users(): User[] {
    return this._state.value.users;
  }

  /**
   * Methods
   */
  /**
   * Logs the user to the application
   *
   * @param username
   * @param password
   * @param rememberMe
   */
  public loginUser = (
    username: string,
    password: string,
    rememberMe = true
  ): void => {
    const user = this._users.findIndex((u) => u.dni === username.trim() && u.password === password.trim());

    if (user !== -1) {
      this._state.value.currentUserIndex = user;
    }

    this._state.value.rememberMe = rememberMe;
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
    if (this._state.value.rememberMe) {
      this._state.value.currentUserIndex = undefined;
    }
  }
}

export const userStore = new UserStore();
